const express =require("express")
require("dotenv").config();
const {pool}=require("./Config/db")
const {userTable,questionTable,answerTable} =require("./model/model")
const authRouter =require("./router/authRouter")
const server = express();
//console.log(process.env.PORT)






let port = process.env.PORT || 5500

//middle ware
server.use(express.json());  

//Router
server.use("/api/v1", authRouter)
//test
// server.get("/test",(req,res)=>{
//     res.send("Test Route")
// })
const startApp = async(port)=>{
    //establishing the connection
    const connection = await pool.getConnection()
console.log("Database connection Established!")
    try{
        //creating the tables 
        await connection.query(userTable)
        await connection.query(questionTable)
        await connection.query(answerTable)
        console.log("userTable, questionTable and answerTable has created")
    
        //starting or running  the server
        server.listen(port, console.log(`server is running on port ${port}`));
    }catch(err){
console.log(err.message)
connection.release()
    }
}
startApp(port)

