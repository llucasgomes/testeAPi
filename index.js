import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

const users = [];
const db = mysql.createConnection({
  host: "db4free.net",
  user: "llucasgomes",
  password: "_*W5DvSvT2$mvmW",
  database: "portiflio",
  port: 3306,
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sucesso!",
  });
});

//  ===========   GETS   ================
app.get("/profile", (req, res) => {
  const q = "SELECT * FROM profile";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/skills", (req, res) => {
  const q = "SELECT * FROM skills";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/education", (req, res) => {
  const q = "SELECT * FROM education";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/experience", (req, res) => {
  const q = "SELECT * FROM experience";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/project", (req, res) => {
  const q = "SELECT * FROM projects";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//  ===========   POSTS   ================
app.post("/profile", (req, res) => {
  const q =
    "INSERT INTO profile(`image`, `name`, `middle_name`, `last_name`, `birthday`, `job`, `phone`, `email`) VALUES (?)";

  const values = [
    req.body.image,
    req.body.name,
    req.body.middle_name,
    req.body.last_name,
    req.body.birthday,
    req.body.job,
    req.body.phone,
    req.body.email,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.post("/skills", (req, res) => {
  const q = "INSERT INTO skills(`image`, `title`, `description`) VALUES (?)";

  const values = [req.body.image, req.body.title, req.body.description];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.post("/education", (req, res) => {
  const q =
    "INSERT INTO education (`course`,`start_date`,`end_date`,`description`) VALUES (?)";
  const values = [
    req.body.course,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.post("/experience", (req, res) => {
  const q =
    "INSERT INTO experience (`company`,`office`,`start_date`,`end_date`,`description`) VALUES (?)";
  const values = [
    req.body.company,
    req.body.office,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.post("/project", (req, res) => {
  const q =
    "INSERT INTO projects (`image`,`title`,`description`,`github`,`page`) VALUES (?)";
  const values = [
    req.body.image,
    req.body.title,
    req.body.description,
    req.body.github,
    req.body.page,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//  ===========   PUTS   ================

app.put("/profile/:id", (req, res) => {
  const profileId = req.params.id;
  const q =
    "UPDATE profile SET `image`= ?, `name`= ?, `middle_name`= ?, `last_name`= ?, `birthday`= ?, `job`= ?, `phone`= ?, `email`= ? WHERE id = ?";

  const values = [
    req.body.image,
    req.body.name,
    req.body.middle_name,
    req.body.last_name,
    req.body.birthday,
    req.body.job,
    req.body.phone,
    req.body.email,
  ];

  db.query(q, [...values, profileId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/education/:id", (req, res) => {
  const educationId = req.params.id;
  const q =
    "UPDATE education SET `course`= ?, `start_date`= ?, `end_date`= ?, `description`= ? WHERE id = ?";

  const values = [
    req.body.course,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];

  db.query(q, [...values, educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/experience/:id", (req, res) => {
  const educationId = req.params.id;
  const q =
    "UPDATE experience SET `company`= ?,`office`= ?, `start_date`= ?, `end_date`= ?, `description`= ? WHERE id = ?";

  const values = [
    req.body.company,
    req.body.office,
    req.body.start_date,
    req.body.end_date,
    req.body.description,
  ];

  db.query(q, [...values, educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const q =
    "UPDATE projects SET `image`= ?,`title`= ?, `description`= ?, `github`= ?, `page`= ? WHERE id = ?";

  const values = [
    req.body.image,
    req.body.title,
    req.body.description,
    req.body.github,
    req.body.page,
  ];

  db.query(q, [...values, projectId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//  ===========   DELETES   ================
app.delete("/profile/:id", (req, res) => {
  const usersId = req.params.id;
  const q = " DELETE FROM profile WHERE image = ? ";

  db.query(q, [usersId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/education/:id", (req, res) => {
  const educationId = req.params.id;
  const q = " DELETE FROM education WHERE id = ? ";

  db.query(q, [educationId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/experience/:id", (req, res) => {
  const experienceId = req.params.id;
  const q = " DELETE FROM experience WHERE id = ? ";

  db.query(q, [experienceId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const q = " DELETE FROM projects WHERE id = ? ";

  db.query(q, [projectId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: Math.random().toString(36),
    name,
    email,
  };

  users.push(newUser);
  return res.json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return res.status(404).json({ error });
  }

  users.splice(index, 1);
  return res.status(204).json();
});

app.listen(port, () => console.log(`listening on ${port}`));
