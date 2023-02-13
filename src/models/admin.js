import fs from 'fs';
import { join } from 'path';

const pathUser = join(require.main.path, 'data', 'user.json');

const getUsers = (cb) => {
  fs.readFile(pathUser, (err, data) => {
    if (err) cb([]);
    else {
      cb(JSON.parse(data));
    }
  });
};

const addUser = (data, cb) => {
  fs.writeFile(pathUser, data, (err) => {
    cb(err);
  });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
