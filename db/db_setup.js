const mongoose = require('mongoose')

mongoose
    .connect(`mongodb+srv://ctd:${process.env.MONGO_AUTH}@rise.kclty.mongodb.net/rise?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

    
const db = mongoose.connection

module.exports = db