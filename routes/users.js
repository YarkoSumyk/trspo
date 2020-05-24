const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
});
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (err) {
        res.json({ message: err })
    }
})
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userId })
        res.json(removedUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.patch('/updateName/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    name: req.body.name,
                }
            })
        res.json(updatedUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.patch('/updateAge/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    age: req.body.age
                }
            })
        res.json(updatedUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router