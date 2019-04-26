var express = require('express');
var router = express.Router();
import roomsApi from './room';

/* GET users listing. */
router.get('', function(req, res, next) {
  res.json('API ENDPOINT');
});
router.use('/rooms', roomsApi);

export default router;
