# Conditional Statements

- `if`, `else if`, `else`, and `switch`
- Order of comparison statements is important
- Operators
    + Relational: `<` `<=` `>` `>=` `==` `===` `!=` `!==`
    + Logical: `&&` `||` `!`
    + Ternary: `variablename = (condition) ? value1:value2`

```javascript
let number1 = '4';
let number2 = 9;

let string = '';

if (number1 >= 96)
{
    string += 'Pitbull is ';
}
else if (number1 === 4 || !number2)
{
    string += 'Poodle is ';
}
else
{
    string += 'Beagle is ';
}

switch (number2) {
    case 3:
        string += 'the best ';
        break;
    case '-6':
        string += 'the sweetest ';
        break;
    case 9:
        string += 'the cuttest ';
    default:
        string += 'dog in world!';
}

fill(255, 90, 10);
textSize(25);
text(string, 10, height/2);
```

## Exercise - 4 Square

Your task is to split the canvas into four equal parts.

```
+-----+-----+
|     |     |
|     |     |
|     |     |
+-----+-----+
|     |     |
|     |     |
|     |     |
+-----+-----+
```

Using the **Relational and Logical Comparison** operators, determine where the mouse is in these squares. For whichever square the mouse is in, you should draw something.

If the mouse is in the top left square then draw something there.

```
+-----+-----+
|     |     |
| (-= |     |
|     |     |
+-----+-----+
|     |     |
|     |     |
|     |     |
+-----+-----+
```

If the mouse is in the bottom right square then draw something there.

```
+-----+-----+
|     |     |
|     |     |
|     |     |
+-----+-----+
|     |     |
|     |｡◕‿◕｡|
|     |     |
+-----+-----+
```

Etcetera

### Exercise Checklist

- [ ] [**core**] Made use of one or more relational operators
- [ ] [**core**] Made use of one or more logical operators
- [ ] Properly displays something in each of the four squares based off of the mouse's location

# Loops

We rarely do something once. Therefore, programming languages provide convenient ways of doing something several times. This is called _repetition_, _looping_, or when you do something to a series of elements — _iteration_.

Let's consider a program that produces the following:

```
0   0
1   1
2   4
3   9
4   16
 ...
98  9604
99  9801
```

Calculation and printing of a list of squares
Each line is a number followed by a “tab” character ('\t'), followed by the square of the number.

A javascript version looks like this;

```js
let i = 0;
while(i<100)
{
    console.log(i+'\t'+i*i);
    ++i;
}
```

When looping there are three things we need to think about.

1. What is the initial starting point?
2. What is the ending point?
3. What are we repeating?

In the example above the answer to these questions are:

1. We start with 0
2. We see if we have reached 100, and if so we are finished
3. Otherwise, we print the number and its square separated by a tab ('\t'), increase the number, and try again.

These three questions are so often used that programming languages have a special syntax for it, the `for` loop.

We could redo the example as:

```js
for(var i = 0; i < 100; ++i){
    console.log(i+'\t'+i*i);
}
```

You can read it like the following:

```
for( initial starting point ; ending point ; simple increment ){
repeated logic
}
```

## Exercise - Draw Custom Shape

Write a sketch that displays your own custom shape, where you utilize a **loop** to define shapes vertices.

Checkout [`beginShape()`](https://p5js.org/reference/#/p5/beginShape), [`vertex()`](https://p5js.org/reference/#/p5/vertex), and [`endShape()`](https://p5js.org/reference/#/p5/endShape).

### Exercise Checklist

- [ ] Clearly displays a custom shape
- [ ] [**core**] Utilizes a loop or loops to define the vertices

# Functions

- task like functions
- computational like functions

## Exercise - Draw a Flower Garden

Create a `flower()` function to draw a simple flower, which kind of looks like a sunflower. The function should take in parameters for position, size and color.

Use this function to draw many, many flowers so that it looks like a flower garden.

### Exercise Checklist

- [ ] [**core**] Wrote the flower function
- [ ] [**core**] Used the function to draw many flowers

# Classes

- Encapsulation
- Combine data with functionality/behavior
- `class` keyword
- `constructor(){}`
    + good place to declare data
    + is what is called when we call `new object()`
- `this`
- Typically create one javascript file per class

Let's make a Bubble class add a new Bubble.js file to do so
Parametrize the constructor : position, radius, color


## Exercise - Create a Paddle and Ball Class

Create your own Paddle and Ball class using javascript ES6.

The classes should have a `constructor()`, an `update()` and `draw()` functions. You may write other helper functions as desired.

Use the ball class to get a ball the moves around the screen and bounces against the walls.

Use the Paddle class to define a simple paddle that moves left and right depending on the arrow keys.

Write a function to test if the ball and paddle collide and make the ball bounce if they do.

### Exercise Checklist

- [ ] [**core**] Created Paddle and Ball class with `constructor()`, `update()` and `draw()` functions
- [ ] [**core**] Use the classes to move a paddle and ball around.
- [ ] Paddle and Ball classes are defined within their own javascript files.
