---
layout: post
comments: true
title: "Discord-notify-bot - Ultimate Discord notfication bot"
redirect_from:
  - /discordnotify/
  - /discord-notify/
  - /discord-bot/
  - /discordbot/
  - /discord-notify-bot/
  - /discordnotifybot/
date: 2023-04-23 1:30:00 -0500
---

<!-- BEGIN AUTO-README -->

[Discord-notify-bot](https://github.com/JakeTurner616/discord-notify-bot) is a Discord bot that sends notifications at any number of specified times and can also send a message to a text channel when a user joins a specified voice channel.

## Bot setup
You need a bot token and to invite your bot with valid permissions from the discord developer portal. You also need the role name, role ID, vc ID, and tc ID in your server so that the bot knows what to monitor and where / whom to send messages.

## Installation
1. Clone the repository: 
`git clone https://github.com/JakeTurner616/discord-notify`
3. Install the required packages: 
`pip install -r requirements.txt`
5. Edit [config.ini](https://github.com/JakeTurner616/discord-notify/blob/main/config.ini) and fill in all values with the required information.
6. Run the bot: 
`python bot.py`

## Usage
Once the bot is running, it will automatically send notifications at the specified times to the specified text channel, and will send a DM to everyone given a specified role when a user joins the specified voice channel.

## License
This project is licensed under the GNU/GPL license - see the [LICENSE](https://github.com/JakeTurner616/discord-notify/blob/main/LICENSE) file for details.
<!-- END AUTO-README -->

---

{% include giscus.html %}
