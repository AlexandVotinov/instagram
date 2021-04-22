module.exports = function(req, res, next){
    if (!(req.session && req.session.session)) {
        return res.redirect("/auth/login")
      }
      next();
}