const Decoration = require("../models/decoration_model");

getDecos = async(req, res) => {
    try {
        const decos = await Decoration.find();
        res.status(200).send(decos)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getDecos
}