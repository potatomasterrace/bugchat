const bots = require('./bots');

module.exports = function (req, res) {
    try {
        const idx = parseInt(req.params['idx']);
        const  message = req.body;
        //bots[idx].send_message(message)
        res.json({
            idx:idx,
            ok: message,
        });
    } catch (e) {
        res.json({
            error: String(e),
        })
    }
};
