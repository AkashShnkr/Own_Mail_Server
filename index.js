const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
   
    allowInsecureAuth: true,

   
    authOptional: true,

    
    onConnect(session, callback) {
        console.log(`onConnect: ${session.id}`);
        callback();
    },
    onMailFrom(address, session, callback) {
        console.log(`onMailFrom: ${address.address}, Session ID: ${session.id}`);
        callback();
    },
    onRcptTo(address, session, callback) {
        console.log(`onRcptTo: ${address.address}, Session ID: ${session.id}`);
        callback();
    },
    onData(stream, session, callback) {
        stream.pipe(process.stdout); 
        stream.on('end', callback);
    }
});

server.listen(25, () => {
    console.log("Server running on port 25");
});
