//import the model
const Todo = require("../models/Todo");  

//define route handler
//why async?jab bhi database me kuch access karna ho ,mera main thread block nhi hona chahiye ,thats why async taaki baaki ka code flow effect na ho
exports.getTodo = async(req,res) =>{
    try{
        //fetch all todo items from database

        const todos = await Todo.find({});

         //response
         res.status(200)
         .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
         });  

 
    }
    catch(err){   
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        }) ;   
       
    }

}

exports.getTodoById = async(req,res) => {
    try{
        //extract todo item on the basis of Id
        const id=req.params.id;
        const todo = await Todo.findById( {_id:  id})

        // data for given id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found with given id",
            }) 
        }

        //data for given id found

         res.status(200).json({
             success:true,
              data:todo,
              message:`Todo ${id} data successfully fetched`,
         })
 
    }
    catch(err){  
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        }) ;   
         
         
    }
}