const Artist = require('../models/artist');
let Song = require('../models/song');
let async = require('async');

exports.song_create_get = (req, res) => {
  Artist.find({})
    .sort({ first_name: 1 })
    .then((respond) => {
      res.render('song_form', { data: respond });
    })
    .catch((err) => console.log(err));
};

exports.song_create_post = (req, res) => {
  let song = new Song(req.body);

  song.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(song.id);
  });
};
exports.song_detail = (req, res) => {
  res.send('NOT - DETAILS');
};

exports.song_list = (req, res) => {
  res.send('NOT - LIST');
};
