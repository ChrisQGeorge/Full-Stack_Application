let fs = require('fs');
let blog = JSON.parse(fs.readFileSync('./data/blog.json','utf8'));
let testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json','utf8'));

/*GET index page*/
const index = (req, res)=>{
    res.render('index', {title: 'Travlr Getaways',testimonials,blog});
};

module.exports = {
    index
};