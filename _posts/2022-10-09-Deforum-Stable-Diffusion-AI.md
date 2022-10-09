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
<video id="video1" width="512px" height="100%;" controls autoplay loop muted="muted">
  <source src="https://thumbs.gfycat.com/AjarEmbellishedElephant-mobile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
<style>
  #video1 {
border-top: solid black 2px;
border-bottom: solid black 2px;
border-right: solid black .4px;
border-left: solid black .4px;
}
video#video:hover {
  
  cursor: pointer;
}
#meta{
 visibility: hidden;
 display: none;
}
</style>
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

  

