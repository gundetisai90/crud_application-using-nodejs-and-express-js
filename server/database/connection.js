const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        //mongodb connection
        const con = await mongoose.connect('mongodb+srv://gundetisai90:Reddysai%409090@cluster0.4yg3sa1.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true,useUnifiedTopology:true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;