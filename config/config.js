exports.cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
}; //allow Cors

exports.enVar = {
    token : "xoxb-256382898130-544456536129-MkhvhRr9BV8vqUzStjMd8CxB",
    incomingWebHook : "https://hooks.slack.com/services/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",
    db: "mongodb://127.0.0.1/paystack"
}
