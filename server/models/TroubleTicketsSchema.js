var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//db model
var TroubleTicket = new Schema({
    ticket_person_reporting:String,
    ticket_problem_description:String,
    ticket_date:String,
});

module.exports = mongoose.model('TroubleTickets', TroubleTicket);