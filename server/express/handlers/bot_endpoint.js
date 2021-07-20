const bots = require('./bots');

module.exports = function (req, res) {
    try {
        const idx = parseInt(req.params['idx']);
        const {message} = req.body;
        bots[idx].dialogueEngine(message)
        res.json({
            ok: true,
        });
    } catch (e) {
        res.json({
            error: String(e),
        })
    }
};
