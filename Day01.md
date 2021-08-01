# Introduction to Programming with P5.js

## Get setup!

We will use Visual Studio Code to write our programs. Checkout [Getting Started with Visual Studio Code](https://code.visualstudio.com/docs/introvideos/basics)

Plugins you should install to code for the course:

```
code --install-extension christian-kohler.path-intellisense
code --install-extension HookyQR.beautify
code --install-extension ms-toolsai.jupyter
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension ritwickdey.LiveServer
code --install-extension samplavigne.p5-vscode
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension VisualStudioExptTeam.vscodeintellicode
```
[How to use p5.js with Visual Studio Code](https://youtu.be/vj9nDja8ZdQ)

I recommend that you download and extrcat the following [`jsbeautifyrc.zip`](assets/jsbeautifyrc.zip) file. The `.jsbeautifyrc` file is a configuration file to customize your format style of javascript, html and CSS files. This can be used by the Beautify plugin for VSCode. Simply place this file in the root of your project folder. [Documentation is here](https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md) if you'd like to customize it.


## Create a hello world sketch

- Open up Visual Studio Code
- Create a p5.js Project
    - Ctrl+Shift+P
    - Type the word `create`
    - Click on `Create p5.js Project` from the dropdown 
        ![](assets/01_create_p5_sketch.png)
    - Create and name a folder for your project 
        ![](assets/02_create_project_folder.png)
    - Your project should lke like this 
        ![](assets/03_project_start.png)
    - **_Optional Step_** - Download and extract the [`jsbeautifyrc.zip`](assets/jsbeautifyrc.zip) to your project folder 
        ![](assets/04_add_format_file.png)
- Edit the `sketch.js` file to contain the following :

```javascript
function setup()
{
    createCanvas( 400, 400 );
}

function draw()
{
    background( 220 );

    text("Hello World", 150, 200);
}
```
- Click on the Go Live button located on the bottom right of editor. 
    ![](assets/05_go_live_button.png)
- You should now see the sketch running in your local web browser
    ![](assets/06_hello_sketch_in_browser.png)

Checkout this [live example](examples/hello/index.html).

# Shapes & Drawings

- [Coordinate System](https://p5js.org/ko/learn/coordinate-system-and-shapes.html)
- Game Loop with `setup()` and `draw()`
- [`arc()`](https://p5js.org/ko/reference/#/p5/arc) [`ellipse()`](https://p5js.org/ko/reference/#/p5/ellipse) [`circle()`](https://p5js.org/ko/reference/#/p5/circle) [`line()`](https://p5js.org/ko/reference/#/p5/line) [`point()`](https://p5js.org/ko/reference/#/p5/point) [`quad()`](https://p5js.org/ko/reference/#/p5/quad) [`rect()`](https://p5js.org/ko/reference/#/p5/rect) [`square()`](https://p5js.org/ko/reference/#/p5/square) [`triangle()`](https://p5js.org/ko/reference/#/p5/triangle)
- [`rectMode()`](https://p5js.org/ko/reference/#/p5/rectMode) and [`ellipseMode()`](https://p5js.org/ko/reference/#/p5/ellipseMode) to change how we can describe the position
- Try `rect(100,50, 25, 75);`
- With Canvas Width of 400 then the range of x values of the canvas pixels are 0-399
- Read the documentation to figure out how to draw a rounded rectangle.
    + `[]` means the parameter is optional
- Order of the draw calls matter
    + Try drawing two overlapping shapes and swap there orders.

## Exercise - Draw your favorite food

Your task is to use the 2D Shape functions to draw a picture of one of your favorite foods.


### Requirements

You must use each of the 2D shape functions at least one time.

- arc()
- ellipse()
- circle()
- line()
- point()
- quad()
- rect()
- square()
- triangle()

Suggestion: Use the ellipseMode() and rectMode() functions to simplify the numbers needed for drawing ellipses and rectangles.

Note: You don't have to use all of the drawing functions to represent the food. You may add decorations in order to fulfill this requirement.

### Exercise Checklist

- [ ] [**core**] Drew a picture of one of their favorite foods
- [ ] used arc() at least one time
- [ ] used ellipse() at least one time
- [ ] used circle() at least one time
- [ ] used line() at least one time
- [ ] used point() at least one time
- [ ] used quad() at least one time
- [ ] used rect() at least one time
- [ ] used square() at least one time
- [ ] used triangle() at least one time


# Color

- RGB
    + Palette picker website: https://coolors.co/app or http://colormind.io
    + Convert hexadecimal to RGB: https://www.rapidtables.com/convert/color/hex-to-rgb.html
    + Color encyclopedia - https://www.colorhexa.com
- 0−255
- color functions [`background()`](https://p5js.org/ko/reference/#/p5/background), [`fill()`](https://p5js.org/ko/reference/#/p5/fill), and [`stroke()`](https://p5js.org/ko/reference/#/p5/stroke)
- Specifying Color For these functions
    + `background('#FF043B');` ⟵ Hexadecimal color codes
    + `background('SkyBlue');` ⟵ CSS Color Names
    + `background(120);` ⟵ Grey scale
    + `background(120, 0, 35);` ⟵ RGB
    + Alpha -> 255 is opaque and 0 is fully transparent
        - `fill(120, 0, 35, 127);` ⟵ RGBA
        - `stroke(120, 127);` ⟵ Grey scale with alpha
- Color Settings are preserved
    + Until `fill()` is called again all subsequent draw calls will have the same fill color
- [`noFill()`](https://p5js.org/ko/reference/#/p5/noFill), [`noStroke()`](https://p5js.org/ko/reference/#/p5/noStroke) and [`strokeWeight()`](https://p5js.org/ko/reference/#/p5/strokeWeight)

## Exercise - Draw a fictional character

Your task is to use the Shape Property and Color functions to draw a picture of one of your favorite fictional characters.

### Requirements

You must use each of the following at least one time

- Call a color function with 1 argument
- Call a color function with 2 arguments
- Call a color function with 3 arguments
- Call a color function with 4 arguments
- Draw a shape with no fill
- Draw a shape with no outline
- strokeWeight()

Note: You don't have to use all of these functions to represent the dog. You may add decorations in order to fulfill this requirement.

### Exercise Checklist

- [ ] [**core**] Drew a picture of one of their favorite fictional characters
- [ ] Called a color function with 1 argument
- [ ] Called a color function with 2 argument
- [ ] Called a color function with 3 argument
- [ ] Called a color function with 4 argument
- [ ] Drew a shape with no fill
- [ ] Drew a shape with no outline
- [ ] Used strokeWeight()

# Mapping range values

- Reactive Animation
- [`map()`](https://p5js.org/ko/reference/#/p5/map)
- Change the background color based off of the mouse position.
    + Map the mouseX range of vales, (0−width), to the backgrounds red channel, 0−255.
    + Map the mouseX range of vales, (width−0), to the backgrounds green channel, 240−100.
    + Map the mouseY range of vales, (0−height), to the backgrounds blue channel, 50−200.


# Variables

A variable is a way to store values. To use a variable, we must both declare it—to let the program know about the variable—and then assign it—to let the program know what value we are storing in the variable. Here's how we would declare a variable named "xPos":

```javascript
var xPos;
```

Now, we can assign xPos to hold the value 10:

```javascript
xPos = 10;
```

If we want to _(and we often do!)_ we can declare and assign in one statement:

```javascript
var xPos = 10;
```

If, for some reason, we want to change the value of a variable later, we can re-assign it:

```javascript
var xPos = 10;

// some time later ...

xPos = 20;
```

Re-assignment can be useful when we want to animate our drawings.

How can we pick names for our variables? For variables in JavaScript, follow these rules:

Variable names can begin with letters, or the symbols `$` or `_`. They can only contain letters, numbers, `$` and `_`. They cannot begin with a number. `myVariable`, `leaf_1`, and `$money3` are all examples of valid variable names.

Variable names are case sensitive, which means that `xPos` is different from `xpos`, so make sure you are consistent.

Variable names can't be the same as existing variable names, and there are a lot in our p5js programming environment. If you ever see an error pop up like "Read only!", try changing your variable name.

Variable names should be clear and meaningful; for example, instead of `ts`, use `toothSize`. Variable names should use camel case for multiple words, like `toothSize` instead of `toothsize` or you could try snake case `tooth_size`.

## Exercise - Animate an Object

Your task is to create your own variables to animate an object. Animate it's position, size, fill color, stroke size, and stroke color.

### Requirements

- Create your own variables to keep track of the objects position, size, fill color, stroke size and stroke color
- Update all of your variables in `draw()`
- Reset all your variables to their initial state when the mouse is pressed
	- Utilize `function mousePressed()`
- Randomize your variables when any keyboard button is pressed.
	- Utilize `function keyPressed()`

### Exercise Checklist

- [ ] [**core**] Declared, initialized and used your own variables to animate position, size, fill color, stroke size and stroke color
- [ ] Resets to the initial state when any mouse button is pressed
- [ ] Resets to a random state when any keyboard button is pressed


# Random

- [`random()`](https://p5js.org/ko/reference/#/p5/random)

```javascript
random();                               // returns random number [0, 1)
random(10.5);                           // returns random number [0, 10.5)
random(10, 240);                        // returns random number [10, 240)
```

<iframe style="width: 200px; height: 200px; overflow: hidden;" src="https://editor.p5js.org/rudy.castan/embed/SJvnLdVGV"></iframe><br><br><strong>References</strong><br><a href="https://youtu.be/nfmV2kuQKwA">The random() Function - p5.js Tutorial</a><br>

# Debugging

- print debugging with [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
- [debugging within Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)
