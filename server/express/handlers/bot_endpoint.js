const db = require('./database');

module.exports = function (req, res) {
    try {
        const idx = parseInt(req.params['idx']);
        const {message} = req.body;
        db.send_message(idx,message)
        res.json({
            ok: true,
        });
    } catch (e) {
        res.json({
            error: String(e),
        })
    }
};
