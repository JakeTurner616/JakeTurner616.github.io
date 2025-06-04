---
layout: post
comments: true
title: "Real Art AI - AI art application"
pinned: true
redirect_from:
  - /realartai/
  - /RealArtAi/
  - /RealArtAI/
  - /Real-Art-AI/
  - /aiapp/
date: 2023-05-02 1:30:00 -0500
---
![banner](https://raw.githubusercontent.com/JakeTurner616/JakeTurner616.github.io/main/assets/img/banner.png)

<!-- BEGIN AUTO-README -->

**Real Art AI** is a full-stack generative art platform built with Dart (Flutter) and Python. It allows users to generate custom digital art using Stable Diffusion with full parameter control.

Supports both **iOS** and **Android**, with features including:

- Text-to-image (txt2img)
- Image-to-image (img2img)
- Inpainting / Outpainting
- Upscaling
- Prompt auto-suggestions

---

## Stack

| Component              | Description                                                              |
|------------------------|--------------------------------------------------------------------------|
| [Stable Diffusion UI]  | Custom A1111 web UI for local image generation                           |
| [Load Balancer]        | Load-balanced execution of multiple inference backends                   |
| [Backend API]          | Python Flask interface for mobile clients                                |
| [Prompt Generator]     | Autocomplete-style prompt enrichment for creativity                      |
| [NSFW Filter]          | Automatic filtering of unsafe images before returning to clients         |

### Repositories

- **[Stable Diffusion Web UI](https://github.com/JakeTurner616/stable-diffusion-webui-stable)**
- **[Load Balancer](https://github.com/JakeTurner616/sd-loadbalance)**
- **[Backend API](https://github.com/JakeTurner616/Real-Art-AI-Backend)**
- **[Prompt Generator](https://github.com/JakeTurner616/prompt-generator-api)**
- **[NSFW Filter](https://github.com/JakeTurner616/stable-diffusion-webui-nsfw-filter)**

---

## License

This project is licensed under the **GNU General Public License v3.0**.  
See the [LICENSE](https://github.com/JakeTurner616/Real-Art-AI/blob/main/LICENSE) file for details.
<!-- END AUTO-README -->

---

{% include giscus.html %}
