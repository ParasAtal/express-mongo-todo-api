const mongoose = require("mongoose");
require("dotenv").config(); 

 const dbConnect = ()=>{
     mongoose.connect(process.env.DATABASE_URL,{
       // useNewUrlParse:true,
       // useUnifiedTopology:true,
     })
     .then(() => console.log("DB conncection is successful"))
     .catch( (error) => {
     console.log("ISSUE in DB conncetion");
    console.error(error.message);
process.exit(1);
}
     ); 
 }

 module.exports = dbConnect;