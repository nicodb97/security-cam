const msg = document.getElementById("msg");
const channel = geckos({port: null});

document.write(`${location.protocol}//${location.hostname}:${location.port}`);

channel.onConnect(error => {
    if (error) console.error(error.message);
  
    // listens for a disconnection
    channel.onDisconnect(() => {})
  
    // listens for a custom event from the server
    channel.on('numero', data => {
        msg.textContent = data;
    });
  })
