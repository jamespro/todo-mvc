const Event = require('../models/Event')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Event.find()
            const itemsLeft = await Event.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Event.create({
                eventcode: req.body.eventcode,
                todo: req.body.todoItem,
                eventstartdate: req.body.eventstartdate,
                eventenddate: req.body.eventenddate,
                eventtype: req.body.eventtype,
                eventvenue: req.body.eventvenue,
                eventcity: req.body.eventcity,
                eventstate: req.body.eventstate,
                eventcountry: req.body.eventcountry,
                completed: false
            })
            console.log('Todo has been added!')
            res.redirect('/admin')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Event.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    