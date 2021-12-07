const Artist = require('../models/artist');
let Song = require('../models/song');

exports.song_create_get = (req, res) => {
  Artist.find({})
    .sort({ first_name: 1 })
    .then((respond) => {
      console.log(respond);
      res.render('song_form', { data: respond });
    })
    .catch((err) => console.log(err));
};

exports.song_create_post = (req, res) => {
  res.send('NOT - POST SONG');
};

exports.song_detail = (req, res) => {
  res.send('NOT - DETAILS');
};

exports.song_list = (req, res) => {
  res.send('NOT - LIST');
};
