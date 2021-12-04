let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArtistSchema = new Schema({
  first_name: {type: String, minlength: 1, maxlength: 50, required=true},
  family_name: {type: String, minlength: 1, maxlength: 50, required=true},
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
  date_of_birt: {type: Date},
})

ArtistSchema.virtual('name'
).get(()=>{
 return this.first_name + ' ' + this.family_name
})

ArtistSchema.virtual('url').get(()=>{
  return 'catalog/artist/' + this._id
})

module.exports = mongoose.model('Artist', ArtistSchema);

