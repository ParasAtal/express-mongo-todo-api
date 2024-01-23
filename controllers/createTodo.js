//import the model
const Todo = require("../models/Todo"); 

//define route handler
//why async?jab bhi database me kuch access karna ho ,mera main thread block nhi hona chahiye ,thats why async taaki baaki ka code flow effect na ho
exports.createTodo = async(req,res) =>{
    try{
//extract title and description from the request body
 const { title,description} = req .body ;
 //create a new todo obj and insert it in db
 //inserted the object into DB
 const response = await Todo.create({title,description}); 
//send a json response with success flag
 res.status(200).json({
    success:true,
    data:response,
     message:'Entry Created Successfully'
 })
    }
    catch(err){
        console.error(err);
        console.log(err); 
        res.status(500)
        .json ({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }

}



