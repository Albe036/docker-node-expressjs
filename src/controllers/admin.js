import adminModel from '../models/admin';

const addUser = (req, res, next) => {
  adminModel.getUsers(data => {
    let db = data;
    db.push(req.body);
    adminModel.addUser(JSON.stringify(db), err => {
      if (err) {
        res.status(202).json({ "errors": JSON.stringify(err), "done": false });
      } else {
        res.status(200).json({ "done": true });
      }
    });
  });
};

const getUsers = (req, res, next) => {
  finn
  adminModel.getUsers(data => {
    res.status(200).json({ data });
  })
};

const getUser = (req, res, next) => {
  adminModel.getUsers(data => {
    const user = data.find(user => user.id === req.params.iduser);
    res.status(200).json({ user });
  })
};

const setUser = (req, res, next) => {
  adminModel.getUsers(data => {
    let db = data;
    const dbdata = db.filter(user => user.id !== req.body.id);
    const setUser = db.find(user => user.id === req.body.id);
    if (JSON.stringify(setUser) !== JSON.stringify(req.body)) {
      dbdata.push(req.body);
      adminModel.addUser(JSON.stringify(dbdata), err => {
        if (err) {
          res.status(200).json({ "done": false, "errors": JSON.stringify(err) });
        } else {
          res.status(200).json({ "done": true });
        }
      });
    } else {
      res.status(200).json({ "done": true });
    }
  })
};

const deleteUser = (req, res, next) => {
  adminModel.getUsers(data => {
    const user = data.find(user => user.id = req.params.iduser);
    console.log(user);
    if (user) {
      const result = data.filter(user => user.id !== req.params.iduser);
      adminModel.addUser(JSON.stringify(result), err => {
        if (err) {
          res.status(200).json({ "done": false, "errors": JSON.stringify(err) });
        } else {
          res.status(200).json({ "done": true });
        }
      })
    } else {
      res.status(200).json({ "done": false, "notFound": true });
    }
  });
}


exports.addUser = addUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.setUser = setUser;
exports.deleteUser = deleteUser;