const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  eventcode: {
    type: String,
    required: true,
  },
  eventstartdate: {
      //TODO: make this default to a date in the future
    type: Date,
    default: Date.now
  },
    eventenddate: {
      //TODO: make this default to a date in the future plus one week
    type: Date,
    default: Date.now
  },
  eventtype: {
      type: String,
      default: 'onsite',
      enum: ['onsite','virtual','hybrid']
  },
  eventvenue: {
    type: String,
  },
  eventcity: {
    type: String,
  },
  eventstate: {
    type: String,
  },
  eventcountry: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Event', EventSchema)
