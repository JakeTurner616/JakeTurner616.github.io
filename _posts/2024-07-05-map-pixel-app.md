---
comments: true
layout: post
published: true
title: "Map Pixel - An r/place Fullstack Clone"
date: 2024-07-05 15:30:00 +0000
---

## Overview

Click [here](https://serverboi.org/map-pixel-app/) to try the live demo.

[map-pixel-app](https://github.com/JakeTurner616/map-pixel-app) is a simple fullstack clone of the popular r/place, scaled to a giant world size. This interactive application allows users to place colored pixels on a massive world map, creating a collaborative digital artwork. Built from scratch using React, Map Pixel aims to offer a seamless and engaging user experience, supporting real-time updates and user interactions.

### Screenshots

![Map Pixel Interface](https://raw.githubusercontent.com/JakeTurner616/map-pixel-app/main/docs/Screenshot-UI-0.png)

*World map interface.*

![Map Pixel Interface](https://raw.githubusercontent.com/JakeTurner616/map-pixel-app/main/docs/Screenshot-UI-1.png)

*Pixel placement interface.*


## Features

- **Interactive World Map:** Users can zoom in and out, and navigate the world map to place pixels.
- **Real-Time Updates:** See pixel placements from other users in real-time.
- **User Authentication:** Secure user login and registration to track individual contributions.
- **Statistics Page:** View global and personal statistics of pixel placements.
- **Bot Protection:** Integrated hCaptcha to prevent automated pixel placements.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Usage

Navigate the map and click to place a pixel. Make sure you are logged in to track your contributions.

1. **Zoom and Navigate:** Use your mouse or touch gestures to zoom in/out and navigate the world map.
2. **Select a Pixel:** Click on a location to place your pixel.
3. **Authentication:** Ensure you are logged in to track and view your contributions.

## Development

### Installation

#### Prerequisites
- Node.js
- npm or yarn
- Python
- Flask
- Docker (for backend deployment)
- Gunicorn (for running the Flask application)
- NGINX (for reverse proxy)

### Steps

#### Testing

1. **Clone the Repository**
   ```sh
   git clone https://github.com/JakeTurner616/map-pixel-app
   cd map-pixel-app
   ```

2. **Install Frontend Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Build and Deploy for Testing**
   ```sh
   npm run start
   # start the development server
   ```

4. **Install Backend Dependencies**
   ```sh
   # Clone backend repo
   git clone https://github.com/JakeTurner616/map-pixel-backend

   cd map-pixel-backend/
   
   # Create a virtual environment
   python -m venv venv
   
   # Activate the virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   ```

5. **Run the Backend Development Server**
   ```sh
   # start the Flask development server
   python backend.py
   ```

#### Deployment

1. **Build and Deploy the Frontend**
   ```sh
   # build the production assets
   npm run build
   ```

2. **Build and Deploy the Backend**
   ```sh
   # Make sure to backup the pixels.db database to the /map-pixel-app directory between container rebuilds to prevent data loss!
   docker build -t map-pixel-app .
   docker run -p 8000:8000 map-pixel-app
   ```

## License

This project is licensed under the GNU GPL 3.0 License. See the [LICENSE](https://github.com/JakeTurner616/map-pixel-app/blob/main/LICENSE) file for details.

---

> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on GitHub.

---

{% include giscus.html %}
