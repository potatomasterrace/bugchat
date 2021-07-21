const bots = require('./bots/all');
const db = require('./utils/database');

module.exports = function (req, res) {
    try {
        const idx = parseInt(req.params['idx']);
        const {message} = req.body;
        bots[idx].dialogueEngine(message)
        res.json({dbVersion: db.getVersion()});
    } catch (e) {
        res.json({
            error: String(e),
        })
    }
};
