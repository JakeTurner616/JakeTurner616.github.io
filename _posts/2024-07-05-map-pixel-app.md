---
comments: true
layout: post
published: true
title: "Map Pixel - An r/place Fullstack Clone"
date: 2024-07-05 15:30:00 +0000
---

[map-pixel-app](https://github.com/JakeTurner616/map-pixel-app) is a simple full-stack r/place clone that allows users to save pixels on an interactive map.

<!-- BEGIN AUTO-README -->

![screenshot](https://github.com/JakeTurner616/map-pixel-app/blob/main/docs/Screenshot-UI-0.png?raw=true)

## Configuration

To self-host this app:

1. **CORS Setup:**  
   Configure allowed frontend origins in the backend server.

2. **Frontend `.env`:**
   - `REACT_APP_BACKEND_URL=https://your-backend-url.com`
   - `REACT_APP_HCAPTCHA_SITEKEY=your-hcaptcha-site-key`

3. **Backend Hosting:**  
   Ensure the backend API is accessible and CORS-compatible with your frontend origin.

## Development

### Install dependencies

```bash
npm install
````

### Start the development server

```bash
npm start
```

Runs the app locally at [http://localhost:3000](http://localhost:3000). It hot-reloads on file changes.

### Build for production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder, suitable for deployment to GitHub Pages or similar.

## Deployment

The frontend can be deployed using GitHub Pages or served statically via any HTTP server.
<!-- END AUTO-README -->

---

{% include giscus.html %}
