const express = require('express');
const mongoose = require("mongoose");
const app = express();
const Schema = mongoose.Schema;

const commentScheme = new Schema({
    name: String,
    user: String,
    date: Date
});

const Comment = mongoose.model("comments", commentScheme);

const taskSchema = new Schema({
    text : String,
    isCheck : Boolean
});

const uri = 'mongodb+srv://Milena:<Miapolyanichko01>@cluster0.qro2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const Task = mongoose.model('tasks',taskSchema);

app.get('/', (req, res) => {
    const task = new Task({
        text :'First task',
        isCheck : false
    });
    task.save().then(result =>{
        res.send(result);
    })

})
app.get('/paramRequest', (req,res) =>{
    Task.find().then(result =>{
        res.send({data :result});
    });
});
app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
