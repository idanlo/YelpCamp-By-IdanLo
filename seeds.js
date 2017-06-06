var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "BLAH BLAH BLAH"
    },
    {
        name: "Desert Something",
        image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
        description: "BLAH BLAH BLAH"
    },
    {
        name: "Third Campground",
        image: "https://farm8.staticflickr.com/7338/9627572189_12dbd88ebe.jpg",
        description: "BLAH BLAH BLAH"
    },
    
]

function seedDB() {
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("REMOVED CAMPGROUNDS");
        // // ADD CAMPGROUNDS
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log("ADDED A CAMPGROUND")
        //             // CREATE A COMMENT
        //             Comment.create(
        //                 {
        //                     text: "This Place Is Great!!",
        //                     author: "IdanLo"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("CREATED A COMMENT")
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    
}

module.exports = seedDB;