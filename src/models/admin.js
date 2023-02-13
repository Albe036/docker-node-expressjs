import fs from 'fs';
import { join } from 'path';

const pathUser = join(require.main.path, 'data', 'user.json');

/**
 * read on file JSON
 * @param {function} cb callback function
 * @returns {void}
 */
const getUsers = (cb) => {
  fs.readFile(pathUser, (err, data) => {
    if (err) cb([]);
    else {
      cb(JSON.parse(data));
    }
  });
};
/**
 * write on file JSON
 * @param {Array} data data of data bases
 * @param {*} cb callback function
 * @returns {void}
 */
const addUser = (data, cb) => {
  fs.writeFile(pathUser, data, (err) => {
    cb(err);
  });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
