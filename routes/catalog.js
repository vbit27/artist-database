var express = require('express');
var router = express.Router();
let artist_controller = require('../controllers/artistController');

router.get('/', artist_controller.artist_index);

router.get('/artist/create', artist_controller.artist_create_get);

router.post('/artist/create', artist_controller.artist_create_post);

router.get('/artist/:id', artist_controller.artist_detail);

router.get('/artists', artist_controller.artist_list);

module.exports = router;
