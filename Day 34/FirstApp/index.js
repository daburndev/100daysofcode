const express = require("express");
const app = express()

// app.use((req, res)=>{
//     console.log("WE GOT A NEW REQUEST!")
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!!")
//     res.send('<h1>This is my webpage!</h1>')
// })


app.get('/',(req,res)=>{
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit.`)
})


app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} subreddit.`)
})

app.post('/cats', (req, res)=>{
    res.send('POST REQUEST TO /catss!! THIS IS DIFFERENT')
})

app.get('/cats', (req,res)=>{
    res.send('MEOWWW!!')
})

app.get('/dogs', (req,res)=>{
    res.send('WOOFFF!!')
})
// /cats => 'meow'
// /dogs => 'woof'
// '/' 



app.get('/search', (req,res)=>{
    const { q } = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING SEARCH')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})


app.get('*',(req,res)=>{
    res.send(`I don't know that path!`)
})


app.listen(8080, ()=>{
    console.log("LISTENING ON PORT 8080!")
})