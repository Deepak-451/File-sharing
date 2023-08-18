import mongoose from "mongoose";

const DBConnection = async () => {
    const MONGO_URI = `mongodb://Deepak:Deepak123@ac-cgl48xs-shard-00-00.lq6hs3l.mongodb.net:27017,ac-cgl48xs-shard-00-01.lq6hs3l.mongodb.net:27017,ac-cgl48xs-shard-00-02.lq6hs3l.mongodb.net:27017/?ssl=true&replicaSet=atlas-vxugy6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
export default DBConnection;