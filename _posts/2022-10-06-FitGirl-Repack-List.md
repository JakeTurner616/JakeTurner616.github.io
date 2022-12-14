---
layout: post
comments: true
title: "Updated FitGirl repacks list"
redirect_from:
  - /fg/
  - /FG/
  - /fitgirl/
date: 2022-10-06 1:30:00 -0500
---
---

Unofficial FitGirl [Repack List](https://files.serverboi.org/s/RepackList.txt) and associated web-scrape scripts for either RepackList [updating](https://github.com/JakeTurner616/FitGirl-Repack-List/blob/main/RepackUpdater.sh) or [updating + magnet extraction](https://github.com/JakeTurner616/FitGirl-Repack-List/blob/main/script.sh)

### RepackUpdater.sh

[RepackUpdater.sh](https://github.com/JakeTurner616/FitGirl-Repack-List/blob/main/RepackUpdater.sh) simply creates or updates a RepackList.txt file in the scripts' working directory.

### script.sh

`script.sh` is a web-scraper that has two purposes, and is divided into two parts:

1. creating an updated `RepackList.txt` with a consise list of FitGirl repacks.
2. reading the `RepackList.txt` and for each entry extract download mirrors into a consise `magnet.txt` in `~/links/fitgirl-repacks.site/<repackname>`.

### RepackUpdater.sh Limitations

`RepackUpdater.sh` needs to be ran as a root/elevated user.

### script.sh Limitations

`script.sh` takes a very long time to extract magnet links. It creates and filters through a list of nearly 3000 links, all need to be pulled from the source of a parent file, and searched through individually.
`script.sh` needs to be ran as a root/elevated user.

---

> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on github.

---

{% include giscus.html %}
