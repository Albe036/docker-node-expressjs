import { Router } from 'express';
import { join } from 'path';
import fs from 'fs';


const router_ = Router();

function getDataJson(cb) {
  fs.readFile(join(require.main.path, 'data.json'), (err, data) => {
    if (err) cb([]);
    else {
      cb(JSON.parse(data));
    }
  });
}

router_.use('/', (req, res, next) => {
  getDataJson(product => {
    res.json(product);
  })
  //res.status(404).sendFile(join(require.main.path, 'views', 'notFound.html')); //.setHeader() you can also define the header
});

export default router_;