let Artist = require('../models/artist');

exports.artist_create_get = (req, res) => {
  res.render('form_artist');
};

exports.artist_create_post = (req, res) => {
  let artist = new Artist(req.body);

  artist.save((err) => {
    if (err) return next(err);
    res.redirect(artist.id);
  });
};

exports.artist_detail = (req, res) => {
  const id = req.params.id;

  Artist.findById(id)
    .then((result) => {
      console.log(result);
      res.render('details_artist', { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};