function homePingcontroller(req, res) {
    // collect the request
    // send it to the service layer
    // prepare and send response
    return res.json({status : "RUNNING"});
}

module.exports = {
    homePingcontroller,
};