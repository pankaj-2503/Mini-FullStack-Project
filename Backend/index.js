const express=require("express");
const app=express();

const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("This is main route")
})

//get a  list of 5 jokes 
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {id:1,title:'First Joke',content:'I was in Tesco’s and I saw this man and woman wrapped in a barcode. I said, “Are you two an item?”'},
        {id:12,title:'Second Joke',content:'I was having dinner with Garry Kasporov (world chess champion) and there was a check tablecloth. It took him two hours to pass me the salt.'},
        {id:3,title:'Third Joke',content:'Why did the tomato turn red? Because it saw the salad dressing!'},
        {id:4,title:'Fourth Joke',content:'Why did the scarecrow win an award? Because he was outstanding in his field.'},
        {id:5,title:'Fifth Joke',content:'Why did the math book look sad? Because it had too many problems.'},
        
    ];
    
    res.send(jokes);
})


app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})