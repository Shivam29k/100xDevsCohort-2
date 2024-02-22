const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const { User, Course} = require("../db/index.js")
require('dotenv').config();
const jwtPassword = process.env.jwtPassword;

// User Routes
router.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    });

    res.json({
        msg: "User created Successfully"
    })
});

router.post('/signin', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    console.log(user);
    if(user){
        if(user.password == req.body.password){
            console.log("Step 1")
            jwt.sign({username: req.body.username}, jwtPassword, { expiresIn: '1h' }, (err, token) => {
                if (err) {
                  console.log("Error");
                  res.json({message: "Internal server error."});
                } else {
                  res.json({token: token});
                }
              });
        } else {
            res.json({message: "Incorrect password"});
        }
    } else {
        res.json({message: "username not found"});
    }
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    res.send(courses);
});

router.post('/courses/:courseId', userMiddleware,  async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    if(course){
        const user = await User.findOne({username: req.headers.username});
        console.log(user.username);
        user.purchasedCourses.push(course._id);
        await user.save();
        res.json({message: "Course purchased successfully."});
    } else{
        res.json({message: "Course not Found."});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({username: req.headers.username}).populate('purchasedCourses');
    res.json(user.purchasedCourses);
});

module.exports = router