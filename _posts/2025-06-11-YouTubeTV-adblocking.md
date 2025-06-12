---
layout: post
comments: true
title: "YouTube TV Desktop w/ adblock"
pinned: false
redirect_from:
  - /YouTube-TV/
date: 2025-06-11 01:30:00 -0500
---

<!-- BEGIN AUTO-README -->


# **YouTube TV**

Simple YouTube TV Client for desktop based on [electron](https://www.electronjs.org/). You can connect a compatible device such as a phone or computer with Google Chrome and send videos to the app for viewing, just like on ChromeCast or smart TVs with YouTube. Includes ad and telemetry blocking out of the box.

It implements a [DIAL](https://en.wikipedia.org/wiki/Discovery_and_Launch) server (based in [SSDP](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol)) to allow connection from devices that use this same protocol (limited to YouTube in this application).

Use the userAgent allowed by YouTube TV:
```
Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.77 Large Screen Safari/534.24 GoogleTV/092754
```
It can use ```npm start``` or else ```npx electron .``` .
If you already have electron installed globally, you can start the app with ```electron .```

## 📦 Builds with Ad and cross-site blocking
The project can be downloaded already built and ready to use for Windows. Build it yourself from source for Linux, MaxOS.

| Platform           |   Architecture   |  Link  |
|--------------------|:----------------:|:------:|
| Windows            | x32/x64          | [Download](https://github.com/JakeTurner616/YouTubeTV/releases/download/2.4.1-ab-0.4/YouTube.TV.Setup.2.4.1-ab-0.4.exe) |
| Linux/MAC (source) | x32/x64          | [Download](https://github.com/JakeTurner616/YouTubeTV/archive/refs/tags/2.4.1-ab-0.4.tar.gz) |


## 📦 Builds (without ad-blocking)
The project can be downloaded already built and ready to use. Available for Linux, macOS and Windows. On x86, x84 and ARM architectures.

| Platform      |   Architecture   |  Link  |
|---------------|:----------------:|:------:|
| Windows       | x32/x64          | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1.exe) |
| Linux (Deb)   | x64              | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-amd64.deb) |
| Linux (Deb)   | ARM64            | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-arm64.deb) |
| Linux (Deb)   | ARMv7l           | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-armv7l.deb) |
| Linux (RPM)   | x64              | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-x86_64.rpm) |
| Linux (RPM)   | ARMv7l           | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-armv7l.rpm) |
| Linux (RPM)   | ARM64            | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-aarch64.rpm) |
| macOS         | Intel (x64)      | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1.dmg) |
| macOs         | Apple Chip (ARM) | [Download](https://github.com/marcosrg9/YouTubeTV/releases/download/v2.4.1/YouTube_TV-2.4.1-arm64.dmg) |

[All builds](https://github.com/marcosrg9/YouTubeTV/releases/latest)

## ⌨️ Key shortcuts
- Max. resolution config panel: <kbd>Ctrl</kbd> + <kbd>S</kbd>
- Fullscreen: <kbd>Ctrl</kbd> + <kbd>F</kbd>.
- Developer Tools: <kbd>Ctrl</kbd> + <kbd>D</kbd>.
- Change cursor visibility: <kbd>Ctrl</kbd> + <kbd>A</kbd>.

<!-- END AUTO-README -->

---

{% include giscus.html %}