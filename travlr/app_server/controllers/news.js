let fs1 = require('fs');
let fs2 = require('fs');
let fs3 = require('fs');
let articles = JSON.parse(fs1.readFileSync('./data/newsArticles.json','utf8'));
let latestNews = JSON.parse(fs2.readFileSync('./data/latestNews.json','utf8'));
let tips = JSON.parse(fs3.readFileSync('./data/vacationTips.json','utf8'));


/*GET travel page*/
const news = (req, res)=>{
    res.render('news', {title: 'Travlr Getaways', articles, tips, latestNews});
};

module.exports = {
    news
};