const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
    .then(user => {
        if (user) {
            errors.email = "User already exists"
            return res.status(400).json(errors)
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                professional: false
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        const payload = { id: user.id, email: user.email };
                        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600}, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        });
                    })
                    .catch(err => console.log(err));
                })
            })
        }
    })
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
    return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
        errors.email = "This user does not exist";
        return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            const payload = { id: user.id, email: user.email };
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                success: true,
                token: "Bearer " + token
            });
        });
        } else {
            errors.password = "Incorrect password";
            return res.status(400).json(errors);
        }
        });
    });
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        professional: req.user.professional
    });
});

//api/users/index
router.get("/", (req, res)=> {
    User.find()
        .then(users=> res.json(users))
        .catch(error => res.status(404).json({nousersfound: "No users found"}))
});

router.get("/:id", (req, res)=> {
    User.find({_id: req.params.id})
        .then(user=> res.json(user))
        .catch(error => res.status(404).json({nouserfound: "No user found"}))
});

// api/users/prof/:id
// router.put("/prof/:id", (req,res)=> {
//     console.log("request", req);
//     User.updateOne({_id:req.params.id}, req.body)
//         .then(user=> res.json(user))
//         .catch(error=>res.status(404).json({failedupdate: "failed to update"}))
// });

router.route("/prof/:id").put((req, res, next)=> {
    console.log("request", req); 
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    },
    (err, data)=> {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    }
    )
})


module.exports = router;

