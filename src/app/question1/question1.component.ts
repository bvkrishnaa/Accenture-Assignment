import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
/*
This :
=============================
The JavaScript this keyword refers to the object it belongs to. ... In a function, 
this refers to the global object. In a function, in strict mode, this is undefined . 
In an event, this refers to the element that received the event.

It has different values depending on where it is used:
--------------------------------------------------------
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

Example:
==========
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

class Foo {
  x = 3;
  print() {
    console.log('x is ' + this.x);
  }
}

var f = new Foo();
f.print(); // Prints 'x is 3' as expected

// Use the class method in an object literal
var z = { x: 10, p: f.print };
z.p(); // Prints 'x is 10'

var p = z.p;
p(); // Prints 'x is undefined'

LET :
=============================

When a variable is declared using let, it uses what some call lexical-scoping or block-scoping.
Unlike variables declared with var whose scopes leak out to their containing function, 
block-scoped variables are not visible outside of their nearest containing block or for-loop.

  f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}
Here, we have two local variables a and b. 
a’s scope is limited to the body of f while b’s scope is limited to the containing if statement’s block.

*/
  constructor() { 
  }
  
  ngOnInit() {
  }

}
