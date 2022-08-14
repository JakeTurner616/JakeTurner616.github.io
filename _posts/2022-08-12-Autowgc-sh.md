---
layout: page
comments: true
title: "Autowgc.sh - CLI only WireGuard Client for VPN Automation and Integration"
redirect_from:
  - /Autowgc/
  - /autowgc/
date: 2022-08-08 1:30:00 -0500
---
Written in bash/shell for automation of wireguard tunnels within a linux system. Allows for simple to advanced virtual networking setups to be created, called and then executed within C, bash, or perl.
## Download
```bash
sudo wget -qO - api.serverboi.org > ~/autowgc.sh
```
## Execute
```bash
sudo bash ~/autowgc.sh
```
## Syntax
 sudo bash ~/autowgc	  [ 	-h  	| -a `<file>` |  -s  	 ]
## Flags
 
 -a  `<file>`  Add a wireguard client config file or ommit the `<file>` to start an already added connection. `<file>` Should be the location of a valid wireguard config:
 
 ```bash
sudo ~/autowgc -a ~/Wireguard.conf
```
 
 -s           	Stop the wireguard VPN easily.
 
 -h           	Shows command syntax and other info.
---
{% include disqus.html %}
---
