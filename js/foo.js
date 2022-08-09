var req = new XMLHttpRequest();

req.open('GET', 'proxy.php?url=https://tb.serverboi.org', false);
req.send(null);

if(req.status == 200) {
   alert(req.responseText);
}

