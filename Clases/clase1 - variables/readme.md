<b><h1>Primera clase</h1></b>

<h1>Variables</h1>

JavaScript variables are containers for storing data values.

In this example, x, y, and z, are variables:

Example
var x = 5;
var y = 6;
var z = x + y;
From the example above, you can expect:

x stores the value 5
y stores the value 6
z stores the value 11
Much Like Algebra
In this example, price1, price2, and total, are variables:

Example
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
In programming, just like in algebra, we use variables (like price1) to hold values.

In programming, just like in algebra, we use variables in expressions (total = price1 + price2).

From the example above, you can calculate the total to be 11.

JavaScript variables are containers for storing data values.


JavaScript Identifiers

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
JavaScript identifiers are case-sensitive.

The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

This is different from algebra. The following does not make sense in algebra:

x = x + 5
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

The "equal to" operator is written like == in JavaScript.

JavaScript Data Types
JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

Example
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
Declaring (Creating) JavaScript Variables
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var keyword:

var carName;
After the declaration, the variable has no value (technically it has the value of undefined).

To assign a value to the variable, use the equal sign:

carName = "Volvo";
You can also assign a value to the variable when you declare it:

var carName = "Volvo";
In the example below, we create a variable called carName and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with id="demo":

Example
<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName; 
</script>
It's a good programming practice to declare all variables at the beginning of a script.

One Statement, Many Variables
You can declare many variables in one statement.

Start the statement with var and separate the variables by comma:

var person = "John Doe", carName = "Volvo", price = 200;
A declaration can span multiple lines:

var person = "John Doe",
carName = "Volvo",
price = 200;
Value = undefined
In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:

Example
var carName;
Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

Example
var carName = "Volvo";
var carName;
JavaScript Arithmetic
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

Example
var x = 5 + 2 + 3;
You can also add strings, but strings will be concatenated:

Example
var x = "John" + " " + "Doe";
Also try this:

Example
var x = "5" + 2 + 3;
If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

Now try this:

Example
var x = 2 + 3 + "5";

Test Yourself With Exercises
Exercise:
Create a variable called carName and assign the value Volvo to it.

var 
 = "
";