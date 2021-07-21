const db = require('./database');


const timeout = (interval)=>{
    return Promise((resolve)=>{
        setTimeout(()=>resolve(),interval)
    })
} 

module.exports = async function (req, res) {
    // does long polling
    // responds only when a new information 
    // can be presented
    const minimumVersion = parseInt(req.params['minimumVersion']);
    let currentVersion = db.getVersion();
    while(currentVersion<= minimumVersion){
        await timeout();
    }
    return res.json(db.present());
};
