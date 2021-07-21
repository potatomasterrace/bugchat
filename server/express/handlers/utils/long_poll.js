const db = require('./database');

const timeout = (interval) => new Promise((resolve) => {
    setTimeout(() => resolve(), interval)
})


module.exports = (pollingInterval, callBack) => {
    return async (req, res) => {
        // does long polling
        // responds only when a new information 
        // can be presented
        let minimumVersion = parseInt(req.params['minimum_version']);
        const shouldUpdate = () => minimumVersion < db.getVersion()
        let connectionClosed = false;
        req.connection.on('close', function () {
            connectionClosed = true;
        });
        // not blocking the event loop
        while (!shouldUpdate() && !connectionClosed) {
            await timeout(pollingInterval);
        }
        if (!connectionClosed) {
            callBack(minimumVersion, req, res);
        }

    }
};
