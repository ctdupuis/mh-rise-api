const mongoose = require('mongoose');

const DecorationSchema = require("../db/schemas/decoration_schema");

const Decoration = mongoose.model("Decoration", DecorationSchema);

module.exports = Decoration;