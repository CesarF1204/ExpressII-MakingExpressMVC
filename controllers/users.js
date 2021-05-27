let ninja = {};
class Users {
    index(req, res) {
        res.render("index");
    }
    submitForm(req, res) {
        ninja['name'] = req.body['name'];
        ninja['location'] = req.body['location'];
        ninja['language'] = req.body['language'];
        ninja['comment'] = req.body['comment'];
        res.redirect("/result");
    }
    result(req, res) {
        res.render("result", {ninja: ninja});
    }
    goback(req, res) {
        res.redirect("/");
    }
}
module.exports = new Users;