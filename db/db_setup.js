const mongoose = require('mongoose')

// mongoose
//     .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_AUTH}@rise.kclty.mongodb.net/rise?retryWrites=true&w=majority`, { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

    
// const db = mongoose.connection


const startDB = async () => {
	const MONGO_URI_USER = process.env.MONGO_URI_USER;
	const MONGO_URI_SECRET = process.env.MONGO_URI_SECRET;
	const CONNECTION_URL = `mongodb+srv://${MONGO_URI_USER}:${MONGO_URI_SECRET}@rise.kclty.mongodb.net`;
	try {
		await mongoose.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log("Connected to database");
	} catch (err) {
		console.warn("Error:", err)
	}
};
startDB();

// module.exports = db