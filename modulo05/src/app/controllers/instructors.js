const Intl = require("intl");
const { age, date } = require("../../lib/utils");
const Instructor = require("../models/Intructor");

module.exports = {
  index(req, res) {
    Instructor.all((instructors) => {
      return res.render("instructors/index", { instructors });
    });
  },
  create(req, res) {
    return res.render("instructors/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }
    Instructor.create(req.body, (instructor) => {
      return res.redirect(`/instructors/${instructor.id}`);
    });
  },
  show(req, res) {
    return;
  },
  edit(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }
    return;
  },
  put(req, res) {
    return;
  },
  delete(req, res) {
    return;
  },
};
// delete
