---
layout: post
comments: true
title: "Fitgirl magnet list"
redirect_from:
  - /fg/
  - /FG/
  - /fitgirl/
date: 2022-10-06 1:30:00 -0500
---
---

# FitGirl-Magnet-List

A script to isolate magnet links from https://fitgirl-repacks.site/all-my-repacks-a-z/

# Usage
```
python magnets.py > out.txt
```

# Output

```
Link: https://fitgirl-repacks.site/chinese-paladin-sword-and-fairy-7/
Title: (Chinese Paladin): Sword and Fairy 7 ΓÇô v2.0.1
Magnet: magnet:?xt=urn:btih:7C2F38F573260C976F132711CECB60970DCFCC79&dn=Sword+and+Fairy+7+%28v2.0.1%2C+MULTi4%29+%5BFitGirl+Repack%5D&tr=udp%3A%2F%2Fopentor.net%3A6969&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce
--------------------
Link: https://fitgirl-repacks.site/hackg-u-last-recode/
Title: .hack//G.U. Last Recode
Magnet: magnet:?xt=urn:btih:864504C72DEDED6E62F9FBEAB00436802D15D0D2
--------------------
Link: https://fitgirl-repacks.site/100-percent-orange-juice/
Title: 100% Orange Juice: All Stars Collection ΓÇô v3.7 + 31 DLCs
Magnet: magnet:?xt=urn:btih:B7C892EAECD7E39B769DA7138E5DCE957ACF197C&dn=100%25+Orange+Juice%3A+All+Stars+Collection+%28v3.7+%2B+31+DLCs%2C+MULTi9%29+%5BFitGirl+Repack%5D&tr=udp%3A%2F%2F46.148.18.250%3A2710&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2770%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=http%3A%2F%2Fretracker.local%2Fannounce&tr=http%3A%2F%2Fretracker.ip.ncnet.ru%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce
```

## Source:

```python
import requests
import sys
from bs4 import BeautifulSoup

# Set the encoding to UTF-8 for printing
sys.stdout.reconfigure(encoding="utf-8")

# Base URL
base_url = "https://fitgirl-repacks.site/all-my-repacks-a-z/"

# Iterate over pages 1 to 71
for page_num in range(1, 72):
    # Update the URL with the current page number
    url = base_url + f"?lcp_page0={page_num}#lcp_instance_0"

    # Send a GET request to the website and retrieve the HTML content
    response = requests.get(url)
    html_content = response.text

    # Create a BeautifulSoup object to parse the HTML
    soup = BeautifulSoup(html_content, "html.parser")

    # Find the <ul> element with class "lcp_catlist" and id "lcp_instance_0"
    ul_element = soup.find("ul", class_="lcp_catlist", id="lcp_instance_0")

    # Check if the ul_element is None
    if ul_element is not None:
        # Iterate over each <li> element within the <ul> element
        for li_element in ul_element.find_all("li"):
            # Find the <a> element within the <li> element
            a_element = li_element.find("a")
            if a_element:
                # Extract the href attribute value (link)
                link = a_element["href"]
                print("Link:", link)

                # Extract the text (title) within the <a> element
                title = a_element.text

                # Handle encoding errors by replacing problematic characters
                try:
                    print("Title:", title)
                except UnicodeEncodeError:
                    print("Title:", title.encode("utf-8", errors="replace").decode())

                # Send a GET request to the linked page and retrieve the HTML content
                linked_page_response = requests.get(link)
                linked_page_html_content = linked_page_response.text

                # Create another BeautifulSoup object to parse the linked page's HTML
                linked_page_soup = BeautifulSoup(linked_page_html_content, "html.parser")

                # Find the <a> element with href starting with "magnet:"
                magnet_link = linked_page_soup.find("a", href=lambda href: href and href.startswith("magnet:"))
                if magnet_link:
                    # Extract the href attribute value (magnet link)
                    magnet = magnet_link["href"]

                    # Handle encoding errors by replacing problematic characters
                    try:
                        print("Magnet:", magnet)
                    except UnicodeEncodeError:
                        print("Magnet:", magnet.encode("utf-8", errors="replace").decode())

                print("--------------------")
    else:
        print(f"Could not find the <ul> element with class 'lcp_catlist' and id 'lcp_instance_0' on page {page_num}")
```

> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on github.

---

{% include giscus.html %}
