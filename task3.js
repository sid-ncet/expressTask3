const express=require('express')
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    console.log('this is product')
    res.send('<form action="/product" method="POST">Name<input type="text" name="title">size<input type="text" name="size of product"><button type="btn">submit</button>');
});
app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log('this is express js')
    res.send('<h1>welcome to the home page page</h1>');
});
app.listen(3000,()=>{
    console.log('this site is working')
})