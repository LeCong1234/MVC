
const mongoose = require('mongoose');

const Course = require('../models/Course');
class NewsController {
    index(req, res) {
        // res.render('news');
        // res.json({
        //     name: 'test'
        // })
        Course.find({}).then(coures => {

            console.log(coures);
        })
    }
}

module.exports = new NewsController;