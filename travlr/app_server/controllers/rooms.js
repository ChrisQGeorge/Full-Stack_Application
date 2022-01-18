let fs = require('fs');
let listings = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));


/*GET travel page*/
const rooms = (req, res)=>{
    res.render('rooms', {title: 'Travlr Getaways', listings});
};

module.exports = {
    rooms
};