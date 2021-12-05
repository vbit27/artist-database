let Artist = require('../models/artist');

exports.artist_create_get = (req, res) => {
  res.render('artist_form');
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
      res.render('artist_details', {
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.artist_list = (req, res) => {
  Artist.find({})
    .sort({ first_name: 1 })
    .then((respond) => {
      console.log(respond);
      res.render('artist_list', { data: respond });
    })
    .catch((err) => console.log(err));
};
