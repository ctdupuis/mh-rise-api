const Decoration = require("../models/decoration_model");

getDecos = async(req, res) => {
    try {
        const decos = await Decoration.find().populate("skill");
        res.status(200).send(decos)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

getDecoBySlug = async(req, res) => {
    try {
        const deco = await Decoration.findOne({ slug: req.params.slug }).populate("skill");
        res.status(200).send(deco)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getDecos,
    getDecoBySlug
}