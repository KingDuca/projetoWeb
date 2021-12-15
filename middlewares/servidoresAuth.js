function servidorAuth (req, res, next){
    if(req.session.servidorLogin){
        next();
    }
    else {
        res.redirect ("/servidos/login");
    }
}

module.exports = servidorAuth;