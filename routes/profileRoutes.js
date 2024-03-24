const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = app => {

    app.put('/api/users/update/:userId/:userName/:userMail', requireLogin, async (req, res)=>{
        const userInfo = await User.updateOne({ _id: req.params.userId }, { name: req.params.userName, emailId: req.params.userMail });
        if (userInfo.acknowledged)
            res.send(true);
    });

    app.put('/api/users/update/:userId/name/:userName', requireLogin, async (req, res)=>{
        const userInfo = await User.updateOne({ _id: req.params.userId }, { name: req.params.userName });
        if (userInfo.acknowledged)
            res.send(true);
    });

    app.put('/api/users/update/:userId/mail/:userMail', requireLogin, async (req, res)=>{
        const userInfo = await User.updateOne({ _id: req.params.userId }, { emailId: req.params.userMail });
        if (userInfo.acknowledged)
            res.send(true);
    });

    app.delete('/api/users/delete/:userId', requireLogin, async (req, res) => {
        const userInfo = await User.deleteOne({ _id: req.params.userId });
        if (userInfo.acknowledged)
            res.send(true);
    });
}