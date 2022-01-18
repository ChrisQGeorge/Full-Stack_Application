let fs = require('fs');
let food = JSON.parse(fs.readFileSync('./data/food.json','utf8'));

/*GET travel page*/
const meals = (req, res)=>{
    res.render('meals', {title: 'Travlr Getaways', food});
};

module.exports = {
    meals
};