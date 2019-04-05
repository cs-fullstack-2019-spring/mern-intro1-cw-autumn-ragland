var express = require('express');
var router = express.Router();
var TicketCollection = require('../models/TroubleTicketsSchema');

//standard home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Tickets' });
});

//add items to model and send created item back to browser
router.get('/tickets/seeddata/:ticket_person_reporting/:ticket_problem_description/:ticket_date', (req,res) => {
  TicketCollection.create({
    ticket_person_reporting: req.params.ticket_person_reporting,
    ticket_problem_description: req.params.ticket_problem_description,
    ticket_date: req.params.ticket_date,
  }, (errors,results) => {
    if(errors) res.send(errors);
    else{
      res.send("Created: " + results)
    }
  })
});

//list all items in the model
router.get('/tickets/listdata', (req,res) => {
  TicketCollection.find({}, (errors,results) => {
    if(errors) res.send(errors);
    else{
      res.send(results)
    }
  })
});

module.exports = router;
