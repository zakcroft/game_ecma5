This is an exploration into design patterns with ecma5

run App.runtime in console.

This game uses ecm5, inheritance, factory and decorators


![uml](uml/avatars.png)

There are two main drawbacks to using the decorator pattern.

The first is that any code that relies on type checking will fail if an object has been wrapped with a decorator. It’s true that
strict type checking of objects is rarely done in JavaScript, but if it is done in your code, decorators will not match the required type.
Decorators are normally completely transparent to the client code; but this is one case where the client code will be able to tell the difference between
a decorator and its component.

The second drawback is that using decorators can often complicate your architecture.
They have a tendency to introduce a lot of small objects that look relatively similar (see console.log(App.runtime)) but do very different things. They can often be confusing, especially to
developers not familiar with the decorator pattern.
