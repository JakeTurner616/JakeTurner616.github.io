---
layout: post
comments: true
title: "Pygame Lua Integration: Simplifying Game Development"
pinned: false
redirect_from:
  - /pygame-lua-integration/
  - /pygamelua/
date: 2024-05-30 01:30:00 -0500
---

This project, [pygame lua bindings](https://github.com/JakeTurner616/pygame-lua-bindings), aims to streamline the process of simple Pygame development tasks through the use of the Lua scripting language while utilizing the robust feature set of Pygame with a custom main loop and event handler system. The idea is to create a framework for fast Pygame prototyping that could possibly even work as an embedded application.

<a href="https://github.com/JakeTurner616/pygame-lua-bindings">
  <img src="https://github.com/JakeTurner616/pygame-lua-bindings/blob/main/docs/lua_snake_pygame.gif?raw=true">
</a>

---

Lua (using lua bindings):
```lua
clear_canvas()
draw_text(50, 50, "Hello Pygame from lua!", "Arial", 30, 'red')
```

<div align="center">
    <img src="https://raw.githubusercontent.com/JakeTurner616/pygame-lua-bindings/main/docs/hello_world_lua.PNG" alt="hello world in pygame with lua">
</div>

Compare to vanilla pygame:
```python
import pygame
pygame.init()
screen = pygame.display.set_mode((800, 600))
font = pygame.font.SysFont('Arial', 30)
red = (124, 0, 0)
green = (0, 255, 0)
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.fill((0, 0, 0))
    screen.blit(font.render('Hello Pygame from python!', True, red), (50, 50))
    pygame.display.flip()
pygame.quit()
```

## Features 🌟

- **Lua-Pygame Bindings**: Seamlessly integrates Lua scripting capabilities with Pygame's graphical functions.
- **High-Level Abstractions**: Handles events and main game loop through Lua, reducing the need for verbose Python code.
- **Cross-Platform Compatibility**: Works across different systems where Python can run.
  
> View all the ported and extra implemented methods on the [wiki](https://github.com/JakeTurner616/pygame-lua-bindings/wiki).
{: .prompt-tip }

> View all the examples, ported games, demos, and souce code in the [/examples](https://github.com/JakeTurner616/pygame-lua-bindings/tree/main/examples) directory of the repo.
{: .prompt-tip }

---

## License 📜

This project is licensed under the GNU GPL 3.0 License - see the [LICENSE](https://github.com/JakeTurner616/pygame-lua-bindings/blob/main/LICENSE) file for details.

---

> Edit this page's <a href="https://github.com/JakeTurner616/JakeTurner616.github.io/blob/main/{{page.path}}">markdown</a> on github.

---

{% include giscus.html %}
