module.exports = (req, res, next) => {
    if (req.user)
        res.redirect('/surveys');
    else
        next();
}