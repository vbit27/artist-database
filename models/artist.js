let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArtistSchema = new Schema({
  first_name: { type: String, minlength: 1, maxlength: 50, required: true },
  family_name: { type: String, minlength: 1, maxlength: 50, required: true },
  date_of_birth: { type: Date },
});

ArtistSchema.virtual('name').get(function () {
  return this.first_name + ' ' + this.family_name;
});

ArtistSchema.virtual('url').get(function () {
  return 'catalog/artist/' + this._id;
});

module.exports = mongoose.model('Artist', ArtistSchema);
