var express = require('express');
var router = express.Router();
let artist_controller = require('../controllers/artistController');
let song_controller = require('../controllers/songController');

// ----  ARTIST ROUTES -----

router.get('/', artist_controller.artist_index);

router.get('/artist/create', artist_controller.artist_create_get);

router.post('/artist/create', artist_controller.artist_create_post);

router.get('/artist/:id', artist_controller.artist_detail);

router.get('/artists', artist_controller.artist_list);

// ---- SONG ROUTES ----

router.get('/song/create', song_controller.song_create_get);

router.post('/song/create', song_controller.song_create_post);

router.get('/song/:id', song_controller.song_detail);

router.get('/songs', song_controller.song_list);

module.exports = router;
