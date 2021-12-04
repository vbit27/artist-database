let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: { type: String, minlength: 1, required: true },
});

GenreSchema.virtual('url').get(() => {
  return 'catalog/genre' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);
