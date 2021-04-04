const mongoose = require('mongoose');

// define the trip schema
const tripSchema = new mongoose.Schema({ 
    code: {type: String, required: true, index: true },
    name: {type: String, required: true, index: true},
    length: {type: String, required: true},
    start: {type: Date, required: true},
    resort: {type: String, required: true},
    perPerson: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true}
});

const blogSchema = new mongoose.Schema({ 
    code: {type: String, required: true, index: true },
    title: {type: String, required: true, index: true },
    date: {type: Date, required: true, index: true },
    description: {type: String, required: true, index: true },
    link: {type: String, required: true, index: true },
});




mongoose.model('trips', tripSchema);
mongoose.model('blog', blogSchema);