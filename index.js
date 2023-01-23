const express = require('express')
const app = express();
app.use(express.json());
const courses = [
    {id: 1, name: "IT"},
    {id: 2, name: "Web Development"},
    {id: 3, name: "Digital Electronics"}
]

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})

app.post('/api/courses', (req,res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
    if(!course){
        res.send()
    }
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
    }
            //YOU WRITE THE NEXT LINES OF code
          //next step: push it to the array
            //next step: the server should return the new resource to the client in the body of the response
    
      
    });
    