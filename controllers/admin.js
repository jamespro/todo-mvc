const Event = require('../models/Event')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const eventItems = await Event.find()
            const activeEvents = await Event.countDocuments({active: false})
            res.render('todos.ejs', {events: eventItems, active: activeEvents})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Event.create({
                eventcode: req.body.eventcode,
                eventname: req.body.eventname,
                eventstartdate: req.body.eventstartdate,
                eventenddate: req.body.eventenddate,
                eventtype: req.body.eventtype,
                eventvenue: req.body.eventvenue,
                eventcity: req.body.eventcity,
                eventstate: req.body.eventstate,
                eventcountry: req.body.eventcountry,
                availablepostlive: req.body.availablepostlive,
                active: true
            })
            console.log('Event has been added!')
            res.redirect('/admin')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                active: false
            })
            console.log('Marked Active')
            res.json('Marked Active')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Event.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                active: true
            })
            console.log('Marked Inactive')
            res.json('Marked Inactive')
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