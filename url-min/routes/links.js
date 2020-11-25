const express = require('express');
const router = express.Router();
const Link = require('../models/link')
const shortid = require('shortid')
// const connectDb = require('./config/db')

router.get('/', (req, res) => {
    res.json({mess: "Hello"})
})


router.post('/short', async (req,res,next) => { //listen post
    const link = req.body.link //get link from post
    try {

        const uri = await Link.findOne({sourse: link}) //find link in db
        if(uri) { //if link in db
           return res.json(uri) //return link from db in client
        } else { 
            const code = shortid.generate() //create a short random simbols collection
            const shortUrl = `http://localhost:3000/links/${code}` //create a short link
            const newLink = new Link({
                code,
                sourse: link,
                short: shortUrl
            })
            await newLink.save()
            return res.json(newLink)
        }
    } catch (error) {
        res.status(500).json({status: 500, mess: JSON.stringify(error)})
    }
    
})


router.get('/:code', async (req,res,next) => {
    const code = req.params.code
    const link = await Link.findOne({code: code})
    if(link) {
        res.redirect(link.sourse)
    } else {
        res.status(404).json({status: 404, mess: 'Link not found'})
    }
})


module.exports = router;

