// Enums in typescript

enum Direction{
    Up,   // by default value is automatically set to = 0
    Down, // value = 1
    Left, // value = 2
    Right // value = 3
}

function doSomething(keyPressed: Direction){
    // Do something
    console.log(keyPressed);
}

doSomething(Direction.Up);  // Output will be 0
doSomething(Direction.Down);  // Output will be 1

// --------------------------------------------------------------
// setting a default start value of the enums

enum Direction1{
    Up = 2,   // value = 2
    Down, // value = 3
    Left, // value = 4
    Right // value = 5
}

function doSomething1(keyPressed: Direction1){
    // Do something
    console.log(keyPressed);
}

doSomething1(Direction1.Up);  // Output will be 2
doSomething1(Direction1.Down);  // Output will be 3

// --------------------------------------------------------------
//  setting a string value of an enum

enum Direction2{
    Up = "up",      // value = up
    Down = "down",  // value = down
    Left = "left",  // value = left
    Right = "right" // value = right
}

function doSomething2(keyPressed: Direction2){
    // Do something
    console.log(keyPressed);
}

doSomething2(Direction2.Up);  // Output will be: up
doSomething2(Direction2.Down);  // Output will be: down