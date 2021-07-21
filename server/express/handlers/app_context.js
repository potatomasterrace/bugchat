const db = require('./database');


const timeout = (interval) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), interval)
    })
}

module.exports = async function (req, res) {
    // does long polling
    // responds only when a new information 
    // can be presented
    let minimumVersion = parseInt(req.params['minimum_version']);
    const shouldUpdate = () =>  minimumVersion<db.getVersion()
    while (!shouldUpdate()) {
        await timeout(30);
    }
    return res.json(db.presentAppState());
};
