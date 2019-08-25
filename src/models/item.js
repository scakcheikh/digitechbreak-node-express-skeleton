var mongoosePaginate =require('mongoose-paginate');
var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

ItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Item', ItemSchema);
