### What is the difference between var, let, and const?

Var, let & const are 3 different style of declaring JavaScript variables. They all have some behavioral differences with Scoping, Redeclaration & Hoisting.

- Ver was the only way for declaring JavaScript variables till JavaScript ES5. It is Function Scoped. It can be Redeclared & could be changed Its value anytime which is problematic at many time. For hoisting, it is hoisted & set the value 'undefined' if its value is not declared before.
- Let was very popular & effective way to declare variable from JavaScript ES6. It is Block Scoped, It can be Redeclared outside its scope, can be changed its value anytime. For hoisting, it is also hoisted & unlike var it throws reference error if its value is not declared.
- Const is also used from JavaScript ES6. It comes from the word constant. It is also Block Scoped, but It can not be Redeclared & can not be changed its value at-all. For hoisting, it is also hoisted & it can not be declared without value.

### What is the spread operator (...)?

- Spread Operator is a feature that is used to spread the items of any array or object. It also crate a copy of array & can concat multiple arrays or objects. Also it can be used as function arguments.

### What is the difference between map(), filter(), and forEach()?

In Javascript all these map(), filter() and forEach() are used to loop through array.

- map(): It also loops through array & return a new array.
- filter(): It checks condition & return a new array with the condition
- forEach(): loops through array & used to save data to external variable or console.log(). It returns itself undefined.

### What is an arrow function?

- Arrow Function is a shorter way to write a function from ES6. It makes codes more clean & more readable.

### What are template literals?

- Template Literals is to general string ""/''. But it use backTick ``. It is very useful in many ways.Mainly we can use it for multiline string & expression inside strings. Also it is used to add direct dynamic values into HTML. It can be used also to use Dynamic API.
