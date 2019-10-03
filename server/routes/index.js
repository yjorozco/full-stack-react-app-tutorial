const { Router } = require('express');
const { retrieveAll, insert, weather } = require('../controllers/cities.controller');


const router = Router();

router.post('/', insert);
router.get('/', retrieveAll);
router.get('/:city', weather);
module.exports = router;
