const mongoose = require("mongoose");

const PaintSchema = new mongoose.Schema({
    name: {type:String, required:true},
    status: {type:String, required:true},
});

const Paint = mongoose.model('Paint', PaintSchema, 'paint_status');
module.exports = Paint;