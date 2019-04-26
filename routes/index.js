var express = require('express');
var router = express.Router();
import apiRouter from './api';

/* GET home page. */
router.get('', (req, res) => {
  res.json('CHATTING SERVER');
});
router.use('/api', apiRouter);

export default router;
