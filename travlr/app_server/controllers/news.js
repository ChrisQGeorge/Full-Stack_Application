let fs = require('fs');
let articles = JSON.parse(fs.readFileSync('./data/newsArticles.json','utf8'));
let latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json','utf8'));
let tips = JSON.parse(fs.readFileSync('./data/vacationTips.json','utf8'));


/*GET travel page*/
const news = (req, res)=>{
    res.render('news', {title: 'Travlr Getaways', articles, tips, latestNews});
};

module.exports = {
    news
};