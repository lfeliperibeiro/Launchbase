const Intl = require("intl");
const { date } = require("../../lib/utils");

module.exports = {
  index(req, res) {
    return res.render("members/index");
  },
  create(req, res) {
    return res.render("members/create");
  },
  show(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }
    return;
  },
  post(req, res) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    birth = Date.parse(req.body.birth);
  },
  put(req, res) {
    return;
  },
  edit(req, res) {
    return;
  },
  delete(req, res) {
    return;
  },
};
