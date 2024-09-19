---
layout: post
comments: true
title: "js13k 2024 Post-Mortem - html/css/js Game Jam"
date: 2024-09-18 1:30:00 -0500
---

# JS13k 2024 Post-Mortem

## Introduction
First off I would like to express how deeply I appreciate the opportunity to participate in the JS13k 2024 competition. This event was a lot of fun to participate in. I found the process of creating my game alongside so many very, very talented programmers to be such a profoundly important learning experience.

## My Game Overview: "Z0MB13"
The concept for my JS13k submission was a top-down arcade-style arena shooter, featuring an unending sequence of zombies that increase in speed and difficulty. The core objective was to design a game that not only engages the user with its escalating challenge but also diversifies the gameplay with an array of interesting zombie types. Above all, I wanted to make something that I would've played back in the days of flash-based games.

## Technologies Used
I utilized a fairly simple set of development tools and libraries for adhering to the competition’s size limit:
- **Game Engine**: Employed LittleJS for its robust capabilities and lightweight build size.
- **Modules**: Leveraged ES6 Modules for efficient script organization and tree-shaking.
- **Build Tools**: Integrated Webpack, Terser, Closure Compiler, UglifyJS, and Roadroller to streamline and minimize the final build.
- **Joystick.js**: An open source html joystick that I was able to heavily adjust to minify and to meet the two stick at a time requirement for touch devices.

These technologies were used to build to the 13KB limitation.

## Challenges Encountered
The development journey was marked by several significant challenges:
- **Mobile Compatibility**: The decision to implement mobile compatibility introduced complexities in the final stages of development, necessitating the addition of touch controls and a mobile-adaptive interface.
- **Game Difficulty Balance**: As the primary playtester, calibrating the game’s difficulty posed a considerable challenge. The goal was to strike a delicate balance between difficulty and enjoyment, a task that required meticulous adjustment and reevaluation to ensure the game remained engaging and accessible.

## Achievements
I am particularly proud of the modular zombie system developed for the game. This system allowed for the efficient introduction of diverse zombie types, somewhat enhancing the game's depth and replayability. By extending each zombie type from a foundational class, I significantly streamlined the development process, reducing redundancy and fostering a more agile development environment.

## Lessons Learned
- **Build Optimization**: I gained invaluable insights into the intricate process of minimizing an HTML-based game, utilizing a combination of advanced tools to refine and compress the game’s assets effectively.
- **Compression Techniques**: The exploration of various zipping techniques to further reduce the game’s size taught me the critical importance of each byte in such a constrained development environment.

## Future Directions
- **Early Platform Consideration**: Future projects will benefit from an earlier determination of targeted platforms, incorporating necessary features such as touch controls from the project's inception.
- **Expanded Playtesting**: Engaging a broader array of playtesters early in the development process will be crucial in more accurately assessing and adjusting the game’s difficulty curve.

## Conclusion
After all is said and done, JS13k was about embracing the constraints of 13KB, learning from every hurdle, and pushing the boundaries of creativity and design with such limited resources. "Z0MB13" was a project that challenged me to think critically, and optimize efficiently. From tackling mobile support to fine-tuning game mechanics, every step was a lesson in balancing ideas and ambition with reality. As I move forward, this experience will for sure guide me to be more intentional regarding the technical intricacies of game/web development. For now, I'm leaving this competition with a great sense of accomplishment and excitement, and I'm highly grateful for the experience.



> Thank you for putting this game jam all together [Andrzej](https://end3r.com/)!


My game entry can be played [on js13kgames.com](https://js13kgames.com/games/z0mb13) or below:

{% include game.html %}
