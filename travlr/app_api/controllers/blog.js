const mongoose = require('mongoose');
const Model = mongoose.model('blog');


const blogList = async (req,res) =>{
    Model
        .find({})
        .exec((err,blog) => {
            if(!trips){
                return res
                    .status(404)
                    .json({"message":"error, blog not found"})
            }else if(err){
                return res
                    .status(404)
                    .json(err)
            } else{
                return res
                    .status(200)
                    .json(blog)
            }



        });
};


const blogFindByCode = async (req,res) =>{
    Model
        .find({"code": req.params.blogCode})
        .exec((err,blog) => {
            if(!trips){
                return res
                    .status(404)
                    .json({"message":"error, blog not found"})
            }else if(err){
                return res
                    .status(404)
                    .json(err)
            } else{
                return res
                    .status(200)
                    .json(trips)
            }



        });
};

module.exports = {
    blogList,
    blogFindByCode
}
