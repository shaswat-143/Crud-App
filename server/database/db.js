import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-aakunnp-shard-00-00.e3q9xzd.mongodb.net:27017,ac-aakunnp-shard-00-01.e3q9xzd.mongodb.net:27017,ac-aakunnp-shard-00-02.e3q9xzd.mongodb.net:27017/?ssl=true&replicaSet=atlas-4uoxvb-shard-0&authSource=admin&retryWrites=true&w=majority`;

try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected successfully');
} catch (error) {
    console.log('Error while connecting with the database', error);
}
 }

 export default Connection()