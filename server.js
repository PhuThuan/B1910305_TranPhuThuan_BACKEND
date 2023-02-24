const app = require('./app');
const config =require('./app/config');
const MongoDB=require('./app/utils/mongodb.util');

async function startServer(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");
        const MONGODB_URL=config.db.uri;
        const PORT = config.app.port;
        app.listen(PORT,()=>{
            console.log(`mongodb connect is ${MONGODB_URL}`);
            console.log(`server is running on port ${PORT}`);
        });
    } catch(err){
        console.log("cannot connect to the database!");
        process.exit();
    }
}

startServer();
