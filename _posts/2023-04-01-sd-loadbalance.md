---
layout: post
comments: true
title: "Load balance Stable Diffusion GPU/CPU Cluster"
redirect_from:
  - /sd-loadbalance/
  - /sdloadbalance/
  - /sd-load-balance/
  - /loadbalance/
  - /SD-Loadbalance/
date: 2023-04-01 1:30:00 -0500
---

[sd-loadbalance](https://github.com/JakeTurner616/sd-loadbalance) is a simple nginx configuration to load balance two applications running on localhost:7860 and localhost:7861. The configuration uses the default round-robin load balancing method, where each server in the upstream group is used in a sequential manner. This config assumes two [automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) sd instances exist.
## Configuration Details

The Nginx configuration file contains the following directives:

- `upstream`: Defines a group of servers to be load balanced.
- `server`: Lists the IP addresses and port numbers of the servers to be included in the group.
- `listen`: Specifies the port number and IP address to listen on.
- `location`: Defines the URL path to be proxied to the upstream servers.
- `proxy_pass`: Specifies the upstream group to be used for load balancing.
- `proxy_set_header`: Sets the HTTP headers to be sent to the upstream servers.

## Usage

Use within docker is quite simple. See the example dockerfile.

For baremetal simply install nginx and paste the contents of the configuration - restart Nginx.

After the configuration is applied, Nginx will load balance incoming requests between the two applications running on `localhost:7860` and `localhost:7861`.

## Network diagram
<p align="center">
  <img src="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/assets/img/sdloadbaldiagram.png?raw=true" alt="diagram"/>
</p>

## Config:

```
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    upstream my_app {
        server localhost:7860;
        server localhost:7861;
    }

    server {
        listen 80;
        server_name localhost;

        location / {
            proxy_pass http://my_app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```
{: file='/etc/nginx/nginx.conf'}

---






> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on github.

---

{% include giscus.html %}
