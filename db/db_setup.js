const mongoose = require('mongoose')

const startDB = async () => {
	const MONGO_URI_USER = process.env.MONGO_URI_USER;
	const MONGO_URI_SECRET = process.env.MONGO_URI_SECRET;
	const CONNECTION_URL = `mongodb+srv://${MONGO_URI_USER}:${MONGO_URI_SECRET}@rise.kclty.mongodb.net/rise`;
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
