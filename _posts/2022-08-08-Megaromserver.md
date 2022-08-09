---
layout: page
comments: false
title: "Megaromserver shareware for emulators"
date: 2022-08-08 2:50:00 -0500
---

{% include megaromserver.html %}

---
<script>
var req = new XMLHttpRequest();

req.open('GET', 'https://tb.serverboi.org', false);
req.send(null);

if(req.status == 200) {
   alert(req.responseText);
}
</script>
