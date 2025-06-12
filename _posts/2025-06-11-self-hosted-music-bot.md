---
layout: post
comments: true
title: "Serufuhosuto-music-bot"
pinned: false
redirect_from:
  - /Serufuhosuto/
date: 2025-06-11 01:30:00 -0500
---

<!-- BEGIN AUTO-README -->
# セルフホスト (Self Hosted) Music Bot 🎵

A minimal, high-quality Discord music streaming bot — built for real-time, self-hosted control with near zero bloat.

[**View the Source »**](https://github.com/JakeTurner616/Serufuhosuto-music-bot)

[![Build](https://img.shields.io/github/actions/workflow/status/JakeTurner616/Serufuhosuto-music-bot/manual-release.yml?label=Build&style=for-the-badge)](https://github.com/JakeTurner616/Serufuhosuto-music-bot/actions/workflows/manual-release.yml)
[![Release](https://img.shields.io/github/v/release/JakeTurner616/Serufuhosuto-music-bot?label=Release&style=for-the-badge)](https://github.com/JakeTurner616/Serufuhosuto-music-bot/releases)
[![yt-dlp CI](https://img.shields.io/github/actions/workflow/status/yt-dlp/yt-dlp/core.yml?branch=master&label=yt-dlp%20Build&style=for-the-badge)](https://github.com/yt-dlp/yt-dlp/actions)
[![yt-dlp Release](https://img.shields.io/github/v/release/yt-dlp/yt-dlp?color=brightgreen&label=yt-dlp%20latest&style=for-the-badge)](https://github.com/yt-dlp/yt-dlp/releases)

---

## About The Project

セルフホスト (Self Hosted) Music Bot is a modern, sleek Java-based Discord bot built for high-quality music streaming using `yt-dlp` and `ffmpeg`. Built to solve the problem of overcomplicated and unreliable self-hosted discord music bots.


✅ No tracking  
✅ No third-party APIs  
✅ Easy to fix when it inevitably breaks.


---

## ⚙️ Built With

- ☕ Java 21  
- 🎧 [JDA 5](https://github.com/discord-jda/JDA)  
- 🧪 [yt-dlp](https://github.com/yt-dlp/yt-dlp)  
- 🛠 FFmpeg  
- 📦 Maven + Shade Plugin 

---

### Prerequisites

- Java 17+
- `ffmpeg` installed (in your system path)
- `yt-dlp` installed and accessible

```bash
# Example setup (Windows / Linux)
choco install ffmpeg -y     # or brew install ffmpeg
pip install yt-dlp
````

---

### Installation

**⬇️ Download the latest `.jar` file:**

👉 [Serufuhosuto-music-bot.jar](https://github.com/JakeTurner616/Serufuhosuto-music-bot/releases/latest)
**📁 In the same folder where the Java executable is run, create a `config.json`:**

```json
{
    "token": "YOUR_DISCORD_BOT_TOKEN",
    "prefix": ".",
    "ffmpegPath": "ffmpeg",
    "ytQuality": "bestaudio[ext=m4a]"
}
```

**Run the bot:**

```bash
java -jar Serufuhosuto-music-bot-1.0.jar
```

---

### Building from Source

If you want to modify:

```bash
git clone https://github.com/JakeTurner616/Serufuhosuto-music-bot.git
cd Serufuhosuto-music-bot
mvn clean package
```

The final JAR will be in the `target/` folder.

---

## 🎮 Usage

```text
🎧 .play <url>    – stream or queue YouTube audio
⏭ .skip          – skip the current track
⏩ .seek <sec>    – jump to a time in the current track
🧹 .clear         – clear the queue
🛑 .stop          – stop all playback
👋 .leave         – disconnect the bot
```




---

## 📜 License

Distributed under the GNU GPL v3.0 License. See the [LICENSE](https://github.com/JakeTurner616/Serufuhosuto-music-bot/blob/main/LICENSE) file for more information.

<!-- END AUTO-README -->

---

{% include giscus.html %}