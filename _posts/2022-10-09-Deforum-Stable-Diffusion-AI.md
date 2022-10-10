---
layout: post
comments: true
title: "AI generated videos using Deforum Stable-Diffusion"
redirect_from:
  - /Deforum-Stable-Diffusion-AI/
  - /Deforum/
  - /deforum/
date: 2022-10-9 1:30:00 -0500
---
<content id="meta">Simple Deforum setup for creating 2D or 3D videos or animations with AI.</content>
<center>
  <style>
.slides {
    padding: 0;
    width: 512.5px;
    height: 295px;
    display: block;
    margin: 0 auto;
    position: relative;
    background-color: rgb(27, 27, 30);
}

.slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.slides input { display: none; }

.slide-container { display: block; }

.slide {
    top: 0;
    opacity: 0;
    width: 513px;
    height: 295px;
    display: block;
    position: absolute;

    transform: scale(0);

    transition: all .7s ease-in-out;
}

.slide img {
    width: 100%;
    height: 100%;
}

.nav label {
    width: 200px;
    height: 100%;
    display: none;
    position: absolute;
	  opacity: 0;
    z-index: 9;
    cursor: pointer;

    transition: opacity .2s;

    color: #000;
    font-size: 100pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    background-color: transparent;
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

.slide:hover + .nav label { opacity: 0.0; }

.nav label:hover { opacity: 0.0; }

.nav .next { right: 0; }

input:checked + .slide-container  .slide {
    opacity: 1;

    transform: scale(1);

    transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .nav label { display: block; }

.nav-dots {
	width: 100%;
	bottom: 9px;
	height: 11px;
	display: block;
	position: absolute;
	text-align: center;
}

.nav-dots .nav-dot {
	top: -5px;
	width: 11px;
	height: 11px;
	margin: 0 4px;
	position: relative;
	border-radius: 100%;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.6);
  z-index: 12;
}

.nav-dots .nav-dot:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
  transform: scale(1.3);
}

input#img-1:checked ~ .nav-dots label#img-dot-1,
input#img-2:checked ~ .nav-dots label#img-dot-2,
input#img-3:checked ~ .nav-dots label#img-dot-3 {
  z-index: 10;
	background: rgba(0, 0, 0, 0.8);
}
</style>
<ul class="slides">
    <input type="radio" name="radio-btn" id="img-1" checked />
    <li class="slide-container">
		<div class="slide">
			<video id="video1" width="512px" height="100%;" autoplay loop muted="muted">
  <source src="https://thumbs.gfycat.com/VainAchingAmoeba-mobile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
        </div>
		<div class="nav">
			<label for="img-6" class="prev">&#x2039;</label>
			<label for="img-2" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li class="slide-container">
        <div class="slide">
          <video id="video1" width="512px" height="100%;" autoplay loop muted="muted">
  <source src="https://thumbs.gfycat.com/PlaintiveComfortableAngelwingmussel-mobile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
        </div>
		<div class="nav">
			<label for="img-1" class="prev">&#x2039;</label>
			<label for="img-3" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li class="slide-container">
        <div class="slide">
          <video id="video1" width="512px" height="100%;" autoplay loop muted="muted">
  <source src="https://thumbs.gfycat.com/SplendidAptIndianpangolin-mobile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
        </div>
        </div>
		<div class="nav">
			<label for="img-3" class="prev">&#x2039;</label>
			<label for="img-1" class="next">&#x203a;</label>
		</div>
    </li>

    <li class="nav-dots">
      <label for="img-1" class="nav-dot" id="img-dot-1"></label>
      <label for="img-2" class="nav-dot" id="img-dot-2"></label>
      <label for="img-3" class="nav-dot" id="img-dot-3"></label>
</center>

---

## Stable Diffusion Model:

Download the latest Stable Diffusion `.ckpt` [model](https://cyberes.github.io/stable-diffusion-models/#models) and place it in `/AI/models/` in the root of your google drive.

## Motion parameters Config:

Motion parameters [collab](https://colab.research.google.com/github/pharmapsychotic/ai-notebooks/blob/main/pharmapsychotic_AnimationPreview.ipynb#scrollTo=Gkc0gKf1q7ha).


1. Change animation mode to either 2D or 3D.
2. Turn up wiggle frames to 3000.
3. Change `init_image` to an image file to use as a reference for creating the animation.

`Runtime` > `Run all`

Now we have motion parameters ready to be pasted into defourm:

## Deforum Config:

Deforum [collab](https://colab.research.google.com/github/deforum/stable-diffusion/blob/main/Deforum_Stable_Diffusion.ipynb#scrollTo=qH74gBWDd2oq).

1. Change animation mode to the one used earlier (2D or 3D).

2. In the Animation Settings section, paste in motion parameters from the motion preview from `angle` - `rot_3d_z`.

3. Set `strength_schedule` parameter as: `0: (.1*(sin(t/20)+ 5))`.

4. Set animation prompts, prompt weights, and width/height of each image. 

`Runtime` > `Run all`

Connect with google drive when prompted. Frames and settings files will be placed in a generated directory inside `/AI/StableDiffusion/`.

---

> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on github.

---

{% include giscus.html %}

  

