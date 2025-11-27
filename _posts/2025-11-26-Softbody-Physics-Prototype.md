---
layout: post
title: "Softbody Physics Prototype: A Real-Time XPBD Tire Simulation"
math: true
pinned: false
date: 2025-11-25 01:00:00 -0500
---

[This project](https://github.com/JakeTurner616/XPBPhysicsPrototype) demonstrates a real-time open-source deformable tire simulation engine implemented in TypeScript, using an adaptation of the **Extended Position-Based Dynamics (XPBD)** method. The formulation follows the model introduced by Macklin, Müller, and Chentanez (2016) in their paper “XPBD: Position-Based Simulation of Compliant Constrained Dynamics.”

The simulation models a soft-body, air-filled tire composed of discretized particles linked by distance constraints and a global pressure constraint. A full dynamic interaction model is included, featuring:

- adjustable constraint stiffness (outer ring, inner ring, spokes)  
- adjustable mass scaling  
- steering impulses applied tangentially around the wheel  
- exact AABB ground and obstacle collisions  
- optional soft–soft particle contacts between tires  
- anti-tunneling velocity clamping  
- per-particle grounded detection and jumping  
- real-time spawning of additional tires  

These features make the simulation significantly more expressive than a minimal XPBD prototype, while remaining compact and easy to understand.

Soft to Rigid:

![Demo ridgid](https://raw.githubusercontent.com/JakeTurner616/XPBPhysicsPrototype/refs/heads/main/docs/early-development-demo-phys.gif)

Soft to Soft:

![Demo soft](https://raw.githubusercontent.com/JakeTurner616/XPBPhysicsPrototype/refs/heads/main/docs/early-development-demo-soft2soft.gif)

Try out the demo [here](https://codepen.io/jaketurner616/pen/RNaQXjO).

---

## Overview

The tire model consists of two concentric rings of particles.  
Each ring contains the same number of particles.  
The structure is held together by:

- distance constraints along the outer ring  
- distance constraints along the inner ring  
- radial constraints linking each inner particle to its corresponding outer particle  
- a pressure constraint preserving the enclosed polygon area  

A steering impulse system applies tangential velocity around the circumference.  
Particles can detect ground contact precisely, enabling a controllable jump impulse.

Runtime UI sliders modify constraint stiffness, pressure, mass scaling, gravity, damping, and solver iterations.

The solver uses XPBD to produce stable behavior across a wide range of stiffness values.

---

## XPBD Background

The XPBD formulation begins with a holonomic constraint:

$$
C(x) = 0
$$

XPBD updates positions through the correction:

$$
x^{t+1} = x + \Delta x
$$

The correction for particle index \(i\) is given by:

$$
\Delta x_i =
-\frac{
  w_i \nabla C_i
}{
  \sum_j w_j \|\nabla C_j\|^2 + \alpha / \Delta t^2
}
\left( C(x) + \alpha \lambda^{*} \right)
$$

The quantities used above are:

Inverse mass:

$$
w_i
$$

Constraint compliance (inverse stiffness):

$$
\alpha
$$

Previous Lagrange multiplier:

$$
\lambda^{*}
$$

Simulation timestep:

$$
\Delta t
$$

The compliance value determines the effective stiffness:

$$
\alpha = \text{constraint compliance (inverse stiffness)}
$$

A small compliance approaches rigid behavior, while larger values produce softer elastic responses.

---

## Distance Constraint

Consider two particles with a rest distance defined by the following constraint:

$$
C(x) = \|x_b - x_a\| - L_0
$$

The gradient of this constraint is:

$$
\nabla C = \frac{x_b - x_a}{\|x_b - x_a\|}
$$

The XPBD solver applies the following corrections.

For particle \(a\):

$$
\Delta x_a = -w_a \lambda \nabla C
$$

For particle \(b\):

$$
\Delta x_b = +w_b \lambda \nabla C
$$

Distance constraints are used for:

- the outer ring  
- the inner ring  
- the radial spokes  

---

## Pressure Constraint

The enclosed polygonal area of the outer ring is computed as:

$$
A = \frac{1}{2}
\sum_{i=1}^{N}
\left( x_i y_{i+1} - x_{i+1} y_i \right)
$$

The constraint enforcing area preservation is:

$$
C(x) = A - A_0
$$

The gradient of the polygon area with respect to vertex index \(i\) is:

$$
\nabla_{x_i} C =
\frac{1}{2}
\begin{pmatrix}
y_{i+1} - y_{i-1} \\
x_{i-1} - x_{i+1}
\end{pmatrix}
$$

This constraint behaves like internal pneumatic pressure, keeping the tire inflated.

---

## Contact Resolution (AABB Model)

A simple AABB collision model is used for ground and obstacle interaction.  
Penetration is corrected along the minimal-overlap axis.  
For a particle with penetration depth \(d\) and collision normal \(n\):

$$
p' = p + n \, d
$$

After solving all constraints, velocities are reconstructed using:

$$
v =
\frac{x^{t+1} - x^{t}}
{\Delta t}
$$

This produces stable contact without impulses or friction.

---

## Soft–Soft Contacts

When multiple tires are spawned, short-range soft contacts are created between outer particles belonging to different tires.

These contacts act as minimum-separation constraints.  
They prevent tires from collapsing into one another and produce realistic soft-body interaction.

---

## Anti-Tunneling Velocity Clamp

To prevent particles from crossing thin terrain features or destabilizing constraints, velocity is clamped to a maximum allowed magnitude based on timestep and expected segment length.

This ensures stability even under very high forces.

---

## Steering, Movement, and Jumping

**Steering:**  
Tangential impulses are applied around the rim by rotating the hub-to-particle vector.  
This creates a rolling motion without explicit rotation or rigid-body mechanics.

**Jumping:**  
A uniform impulse is applied when any outer particle is detected touching the ground.

**Horizontal Speed Limit:**  
Horizontal velocity is capped per particle to prevent runaway acceleration and instability.

---

## Cite This Project

If you use or modify this work in an academic or research context, please cite both this implementation and the original XPBD paper.

@misc{turner2025xpbdtire,
  author       = {Turner, Jakob},
  title        = {XPBPhysicsPrototype},
  year         = {2025},
  howpublished = {\url{https://github.com/JakeTurner616/XPBPhysicsPrototype}},
  note         = {Real-time deformable tire simulation based on XPBD}
}

@article{macklin2016xpbd,
  title   = {XPBD: Position-Based Simulation of Compliant Constrained Dynamics},
  author  = {Macklin, Miles and Müller, Matthias and Chentanez, Nuttapong},
  journal = {NVIDIA Research},
  year    = {2016},
  url     = {https://matthias-research.github.io/pages/publications/XPBD.pdf}
}

## License

If you use or modify the source code and plan to re-release it, it must be open source under the terms of the [GNU GPL 3.0 license](https://github.com/JakeTurner616/XPBPhysicsPrototype/blob/main/LICENSE).

---

{% include giscus.html %}
