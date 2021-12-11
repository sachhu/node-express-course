const express = require('express');
const app = express();

const monkUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/user', function(req,res){
    res.json({
        success: true,
        message: "successfully got user. Nice!",
        user: mockUserData
    })
})
app.listen(8000,function(){
    console.log("server is running")
})