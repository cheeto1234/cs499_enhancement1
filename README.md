
# CS-499 Enhancement 1

Capstone project enhancement for Software Design/Engineering.


## Run Locally

Clone the project

```bash
  git clone https://github.com/cheeto1234/cs499_enhancement1
```

Go to the project directory

```bash
  cd cs499_enhancement1
```

Install dependencies (NodeJS is required to run the local server with Express)

```bash
  npm install
```

Start the server

```bash
  Node .
```

## Viewport Navigation
- The mouse-wheel zooms in and out
- Left-click allows orbitting the model
- Right-click allows for lateral movement

## Changing the Model

In order to change the model, simply place a compatible GLTF file in the folder labeled "model." Name the GLTF file "scene.gltf" and it should render the new model in the program.

## Narrative

**What is it?** This artifact is a simplistic 3D renderer made with three.js
(using WebGL), it is based on a project I completed for the class CS-330,
originally written in OpenGL.

**Why this?** I chose to use this artifact for the capstone section on software
design and engineering because the solution can be implemented in any graphics
library, as it is not overly complex. This allowed me to easily recreate the program
in WebGL using the original project as a guidepost. I feel as though this is a good artifact
for this section as it illustrates a proficiency in implementing a solution that is format
agnostic (IE a single problem solved in multiple languages).

**Skills Demonstrated.** I believe that the skills demonstrated in the creation, testing,
and implementation of this artifact are mainly focused in the sphere of "thinking like a
programmer." This is because the ability to break down the functionality of a program into
a high-level overview that allows one to understand its function in a format-agnostic manner
is a critical problem-solving skill. One of the first things we were taught in the computer
science program was utilizing pseudocode to block out problems so that we could later implement
a solution based on said high-level overview.

**Why are these skills important?** These skills are crucial to the success of any software
engineer as they enable one to formulate a plan of action based on both a preset goal and
an existing understanding of how a program works. Without the ability to conduct an analysis
and to understand functionality one cannot hope to understand how to contribute to the development
of any program.

**Course Objectives.** I believe that the objectives for this milestone were met by this
enhancement, as it demonstrates proficiency in planning, problem-solving, and implementation.
The objective of software engineering is the ability to implement a complex solution while
maintaining an understanding of the functionality and goals of a given project. I believe that
this project shows the process of developing a complex solution around a high-level goal which,
over the course of this artifact's development, was refined, expanded, and tweaked in order to
accomplish the original objective.

## The Process

1. Beginning with reviewing the work from the original project, I cloned the repository and
inspected the original code to refamiliarize myself with the program as it had been a few months
since I worked on it.

2. I developed a list of core functionalities that I wished the implement into my new solution
based on the functions of the original project.

3. I began thinking about potential improvements I could make that would enhance the new
version in comparison to the original. Some of the enhancements I came up with were:
- Orbiting camera controls as opposed to "flight" controls.
- A GUI for tweaking variables that control how the scene looks.
- A better way to run the program, as the original required OpenGL to be installed and included in the system's environment variables along with various other dependencies.

4. I began working on the project by first creating the boilerplate code. The files I started with were:
- The HTML document. (index.html)
- A stylesheet to normalize styles on different browsers. (styles.css)
- A JS file to hold the program's main logic. (app.js)

5. I then organize the folder structure, placing the stylesheet and program logic in a source folder.
I also imported the model to be used as a GLTF file.

6. As I worked on the program I added dependencies to the modules folder as needed, but sparingly.

7. I frequently tested the program after every change to ensure that it was functioning properly.

8. After the core functions were achieved I thoroughly checked all my comments to make sure they made sense.

9. After checking everything, I implemented a simple local server using Express.js so the program could be run easily.

10. Finally, I published the program on GitHub.
