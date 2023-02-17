// 2.2 Loading External JavaScript Files
// alert('Hello World!');

// 2.3 Writing to the Console
console.log('Hello World!');

// 2.4 Variables and Constants
console.log('Variables and Constants');
global1 = 10;
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
const constant1 = global1
    + functionScoped
    - blockScoped;
console.log(constant1);

// 2.4.1 Variable Types
console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean + "\n");

// 2.4.2 Boolean Variables
console.log('Boolean Variables');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);
let sortaTrue = '1' == 1
console.log(sortaTrue);
let notTrue   = '1' === 1
console.log(notTrue);

// 2.5 Conditionals
// 2.5.1 If Else

console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// 2.5.2 Ternary Conditional Operator
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// 2.6 Functions
// 2.6.1 Legacy ES5 Function
console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// 2.6.2 New ES6 arrow functions
console.log('New ES6 arrow functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// 2.6.3 Implied returns
console.log('Implied return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// 2.6.4 Optional parenthesis and parameters
console.log('Parenthesis and parameters')
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// 2.7 Arrays
console.log('Arrays')
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1)
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(variableArray1)

// 2.7.1 Array index and length
console.log('Array index and length')
const length1 = numberArray1.length;
console.log(length1)
const index1 = numberArray1.indexOf(3);
console.log(index1)

// 2.7.2 Adding and removing data to/from Arrays
// adding new items

console.log('Add and remove data to arrays')
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// 2.7.3 For Loops
console.log('For loops')
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// 2.7.4 The Map Functions
console.log('Map Function')
const squares = numberArray1.map(square);
console.log(squares)
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes)

// 2.7.5 The Find Function
console.log('Find Function')
const four = numberArray1.find(a => a === 4);
console.log(four)
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3)

// 2.7.6 The Find Index Function
console.log('Find Index')
const fourIndex = numberArray1
    .findIndex(a => a === 4);
console.log(fourIndex)
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(string3Index)

// 2.7.7 The Filter Function
console.log('Filter function')
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
console.log(numbersGreaterThan2)
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
console.log(evenNumbers)
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(oddNumbers)

// 2.8 Template String
console.log('Template String')
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

// 2.10 Executing jQuery scripts
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    // 2.11 Binding to the DOM
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    // 2.12 Changing style programmatically
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // 2.13 Getting and setting attributes
    console.log('Get and set attributes')
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // 2.14 Adding and removing classes
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // 2.15 Hiding and showing content
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();

    // 2.16 Creating new elements
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    // 2.17 Appending new elements
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // 2.18 Removing and emptying content
    const removeLi =$("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // 2.19 Changing content
    const changeThisText =
        $("#change-this-text");
    const changeThisHtml =
        $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
   <li>Line item A</li>
   <li>Line item B</li>
   <li>Line item C</li>
`);

    // 2.20 Navigating up and down the DOM tree
    const child2 = $("#child-2");
    const parent1 =
        child2.parents("#parent");
    parent1
        .css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    // 2.21 Handing click events
    const handleClick =
        () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    // 2.22 Event target
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // 2.23 Hiding and showing content
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
}
$(init);




