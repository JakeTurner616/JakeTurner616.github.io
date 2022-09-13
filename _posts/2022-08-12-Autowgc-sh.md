---
layout: post
comments: true
title: "Autowgc.sh - CLI only WireGuard Client for VPN Automation and Integration"
redirect_from:
  - /Autowgc/
  - /autowgc/
  - /autowgc.sh/
  - /Autowgc.sh/
date: 2022-08-08 1:30:00 -0500
---
[Autowgc.sh](https://github.com/JakeTurner616/autowgc) is a wireguard client for linux written in bash/shell for automation of wireguard tunnels within a linux system. Allows for simple to advanced virtual networking setups to be created, called and then executed within C, bash, or perl.
## Download:
```bash
sudo wget -qO - api.serverboi.org > ~/autowgc.sh
```
## Execute:
```bash
sudo bash ~/autowgc.sh
```
## Syntax:
 sudo bash ~/autowgc	  [ 	-h  	| -a `<file>` |  -s  	 ]
## Flags:
 
 -a  `<file>`  Add a wireguard client config file or ommit the `<file>` to start an already added connection. `<file>` Should be the location of a valid wireguard config:
 
 ```bash
sudo ~/autowgc -a ~/Wireguard.conf
```
 
 -s           	Stop the wireguard VPN easily.
 
 -h           	Shows command syntax and other info.
 ---
 
 ## Execute within C:
 
 ```c
#include <stdlib.h>

system("sudo bash ~/autowgc -a <file>");
```
{: file='/program.c'}

 ## Execute within C++:
 
 ```c++
#include <cstdlib>

std::system("sudo bash ~/autowgc -a <file>");
```
{: file='/program.cpp'}

## Execute within C#:

```c#
public string RunCommandWithBash(sudo bash ~/autowgc)
{
    var psi = new ProcessStartInfo();
    psi.FileName = "/bin/bash";
    psi.Arguments = -a <file>;
    psi.RedirectStandardOutput = true;
    psi.UseShellExecute = false;
    psi.CreateNoWindow = true;

    using var process = Process.Start(psi);

    process.WaitForExit();

    var output = process.StandardOutput.ReadToEnd();

    return output;
}
\\ or try out CliWrap https://github.com/Tyrrrz/CliWrap for bash interaction from within C#
```
{: file='~/program.cs'}

## Execute within Perl:

```perl
$command="ls /";
system($sudo bash autowgc -a <file>);
```
{: file='/program.pl'}

## Source:

```bash
 #!/bin/bash
if (( EUID != 0 )); then
   echo "Error: Must be ran as root user" 1>&2
   exit 100
fi
WG=$(wg)
while getopts ":ahs" option; do
   case $option in
      a) 
         ;;
      h) 
   echo -e "autowgc (Auto wireguard client) - allows for easy managment of a wireguard connection."
   echo
   echo "Syntax: ./autowgc [-h |-a <file>| -s ]"
   echo "options:"
   echo "-a <file>    Add a wireguard client config file or ommit the <file> to start an already added connection."
   echo "-s           Stop the wireguard VPN."
   echo "-h           Shows command syntax and other info."
   echo
         exit;;
           s) 
if [ -z "$WG" ]
then
echo "Error: nothing to do: no active connection" && exit
else
systemctl stop wg-quick@wg0.service && echo -e "Stopped!" && exit 0
fi
###

         ;;
     \?) 
         echo "Error: Invalid or unreconized option"
         exit;;
                 
   esac
done
if [ -z "$1" ]
then
      echo "Error: nothing to do: no flags used" ; exit
else
      :
fi
if [ -z "$2" ]
then
      :
else
    cp -r $2 /etc/wireguard/wg0.conf  
fi
CONFIG=/etc/wireguard/wg0.conf
if [ -f "$CONFIG" ]; then
    :
else 
    echo "Error: $CONFIG does not exist." && exit 0
fi
###############################
echo "Starting connection!"
###############################
os_version=$(lsb_release -r |cut -f2)
localnetint=$(ip addr | awk '/state UP/ {print $2}'| tr -d ':' | tail -1)
if [ "$os_version" = "18.04" ]; then
    add-apt-repository universe 2>/dev/null
else
:
fi
UFW=$(ufw status verbose)
if [ "$UFW" = "Status: active" ]; then
  ufw route allow in on wg0 out on $localnetint|head -n 1
  ufw route allow in on $localnetint|head -n 1 out on wg0
else
:
fi
spinner()
{
    local pid=$!
    local delay=0.75
    local spinstr='|/-\'
    while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
        local temp=${spinstr#?}
        printf " [%c]  " "$spinstr"
        local spinstr=$temp${spinstr%"$temp"}
        sleep $delay
        printf "\b\b\b\b\b\b"
    done
    printf "    \b\b\b\b"
}
(apt-get update > /dev/null && apt-get install openresolv -y > /dev/nulll && apt-get install wireguard -y > /dev/null && apt-get upgrade > /dev/null && wait && cd /etc/wireguard ; umask 077 && wg genkey > private-key && wg pubkey > public-key < private-key) &
spinner
###
systemctl start wg-quick@wg0.service 2>/dev/null 
if [ $? -eq 0 ]; then
    echo -e "Started:$(systemctl status wg-quick@wg0.service | grep SUCCESS | head -1)" 
else
    echo -e "Error: $(sudo journalctl -xe | grep "wg-quick@wg0.service has finished with a failure" | tail -1)"
	systemctl status wg-quick@wg0.service | grep "Main process exited, code=exited, status=1/FAILURE"
fi
exit 0
```
---
{% include giscus.html %}
