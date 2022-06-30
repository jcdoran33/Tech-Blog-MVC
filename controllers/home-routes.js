//imports
const router = require('express').Router();
const { Post } = require('../models'); //import Posts to display on the homepage...do we also need users or comments?
const withAuth = require('../utils/auth');

//GET route for "/" - should just show/render all Posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: {
                message
            }
        });
        //do we need to map postData to an array here first before render?
        const posts = postData.map((post) => post.get({ plain: true }));
        //then render the homepage.handlebars
        res.render("homepage", {
            posts,
            logged_in: req.sessions.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }

});