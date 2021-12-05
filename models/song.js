let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SongSchema =  new Schema({
  title: {type: String, minlength: 1, maxlength: 50, required=true},
  year: {type: Date}, 
  artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
})

SongSchema.virtual(()=> {
  return 'catalog/song/' + this._id
})


module.exports = mongoose.model('Song', SongSchema);
