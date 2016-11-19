require('dotenv').config()
const express = require('express')
const router = express.Router()

const sendgrid  = require('sendgrid')(process.env.SENDGRID)

router.post('/sendEmail', function(req,res,next) {
  const payload   = {
    to      : process.env.EMAIL,
    from    : req.body.email,
    subject : 'Email From Personal Website',
    text    : `From: ${req.body.name} \n ${req.body.message}`
  }

  sendgrid.send(payload, function(err, json) {
    if (err) {
      console.error('sendgrid error in sendEmail router',err)
      res.status(503).json({error: err, error_message: 'Form fields not filled out correctly'})
    } else {
      res.status(200).json(json)
    }
  })

})

module.exports = router
