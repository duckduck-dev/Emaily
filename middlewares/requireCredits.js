module.exports = (req, res, next) => {
    //if the user user does't have greater than 0 credits 
    if(req.user.credits < 1) return res.status(403).send( {  error: 'Not enough Credits' } );

    next();
};