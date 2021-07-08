const db = require( './database');

const rubberduck= {
    state:{
        disposable : '',
        history : ["How can I help?"],
        index:0,
    },
    get_response: (message)=>{
        const answersBasic = ["can you elaborate?","and why do you believe that is so?","can you be more specific?","what would be your guess?","I need more details for this one"]; 
        const answersAdvanced = ["have you check the logs?","have you tried restarting?","what does the documentation say?", "Maybe its a typo"]
        const answersAdjust = ["you need to be a bit more specific","come on I am trying to help","whatever","that does not sound like a bug"]
        if (this.state.disposable.length <= 7) {
            return answersAdjust[Math.floor(Math.random()*answersAdjust.length)];
        } else if (this.state.history.length <= 3 && this.state.disposable.length > 6) {
            return answersBasic[Math.floor(Math.random()*answersBasic.length)];
        } else if (this.state.history.length >= 4) {
            return answersAdvanced[Math.floor(Math.random()*answersAdvanced.length)];
        }
    },
    dialogueEngine:(message)=>{
      db.send_message(this.state.index,message)
      resp=get_response(this.state.index,message);
      if (resp){
          setTimeout(()=>db.receive_message(this.state.index,resp),6000)
      }
    }
}

const donald =  {
    state:{
        history : ["I'm an echo"],
        index:1,
    },
    get_response: (message)=>message,
    dialogueEngine:(message)=>{
      db.send_message(this.state.index,message)
      resp=get_response(this.state.index,message);
      if (resp){
          setTimeout(()=>db.receive_message(this.state.index,resp),6000)
      }
    }
}

const bots = [rubberduck,donald]

module.exports =function (req, res) {
    const idx = req.params['idx'];
    if (0<=idx && idx<bots.length()){
        bots[idx].send_message(message)
        res.json({
            ok:true,
        });    
    }else{
        res.json({
            ok:false,
        })
    }
};
  