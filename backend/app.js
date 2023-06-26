const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { type } = require('os');
const { access } = require('fs');
const sectetKey = "MySecretKey";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    console.log("THis is backend");
    res.json({
        message: `This is a message, how are you?`,
        response: ` `
    });
});
app.get("/login",(req,res)=>{

})
app.post("/login",(req,res)=>{
    const user = {
        name: 'Drumil',
        address: 'My address',
        etc: " etc"
    }
    jwt.sign({user},sectetKey,{expiresIn: '300s'},(err,token)=>{
        res.json({
            token
        });
    })
});
app.post("/profile",verifyToken,(req,res)=>{
    jwt.verify(req.token,sectetKey,(err,authData)=>{
        if(err){
            res.status(200).send({message: "Invalid Tokens"});
        }else{
            res.json({
                message: "Access Granted",
                authData
            });
        }
    })
});
function verifyToken(req,res,next){
    
    const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.status(401).json({ message: "Token not valid" });
  }
}
const port = 6001;
app.listen(port,()=>{
    console.log("We are live on port "+port);
})