# Learning Typescript

This is the repo I'm working on while I'm learning [typescript course](https://www.linkedin.com/learning/learning-typescript-2) on LinkedIn Learning.

There are four chapters. Each includes the exercise files, starter and final files. I have modified the exercise files on-the-go while I'm learning, plus added some comments regarding the lessons. I also summarize what I've learned in each chapter.

<center>
  <a href="#chapter-1-The-Basics"> Chapter 1</a> | 
  <a href="#chapter-2-defining-custom-types"> Chapter 2</a> | 
  <a href="#chapter-3"> Chapter 3</a> | 
  <a href="#chapter-4"> Chapter 4 </a>
</center>

## Prerequisites
1. Node.js

    Install [Node.js](https://nodejs.org/en/download/) if you don't have one
2. TypeScript
  
    ``` npm install -g typescript ```
  
    Reference: [Official website](https://www.typescriptlang.org/#installation)


## What I've learned:

## Intro:

### TypeScript
- Superset of JavaScript, which means TS extends features from native JS and anything in JS is valid to TS.

### Set up `tsconfig.json`

- In the root directory of the application, create new file name `tsconfig.json`
- The main two things needed to specified are `target` and `outDir`
- To do so, copy the code below to `tsconfig.json`
    ```
    {
        "compilerOptions": {
            "target": "es5",
            "outDir": "dist",
            "sourceMap": true
        }
    }
    ```
- Here is the explantion of each field:
    - `target` is telling transpiler `which version of JS` that TS will be transpiled to, in this case, it will be transpiled to `ES5`.
    - `outDir` is telling transpiler `where` to store the transpiled to.
    - `sourceMap` is optional but normally used to denug the application.
- Some other field, such as [`allowJs` and `checkJs`](#type-checking-for-JavaScript-files), and [`lib`](#Adding-Type-support-for-native-APIs), will be added later on throughout the course.

### Migrate JS to TS
- Easy peasy, just change the extension `*.js` to `*.ts`. The errors will show up, but it's ready to transpile.

## Chapter 1: The Basics

### Basic Type in JavaScript
  1. String
  2. Boolean
  3. Number
  4. BigInt
  5. Null
  6. Undefined
  7. Symbol (introduced in ES6)
  8. Object
    
        - Function is also considered as the object

### Syntax
- Define type for variables
    
    `var variableName: type = value`
- Define type for functions

    ```
    function foo(a: string): string {}
    // or
    foo: (a: string) => string {}
    ```

## Chapter 2: Defining Custome Types
### Type inference
  - Infer the type without explicitly declare 
### Gradual Typing

### Custom type with interface
  - Custom type
  - Transpiler digests and remember it for later, if it's not used in the code yet, it won't affect any transpiled .js file
  - Can be variables and function
  - For example, object with different types in it can be defined as:
      ```
      interface Namelist { 
          firstName: string,
          readonly lastName: string,    // readonly declares that this variable cannot change
          phoneNumber?: number,         // ? means optional telling TS that this field is optional
          address: string,

          add: (note: string) => string // function
      }
      ```

## - Enum
  - Strongly type object
  - A set of predefined variables

## - Literal type
  - Inline type
  - Declare the available values to the variable directly separated by `|`
  - This applies to the type as well

### Allowing a variable to be multiple types
- Define the custome type and assign it to be multiple types
- For example, `type Cost` can be either `number` or `string`
    
    ```
    type Cost = number | string // here the literal type (|) is used!
    ```

## Chapter 3: Classes

### Classes
- all possible properties must be difined at class level
- to define class

  `class Class_name {}`
- conventianally, `underscore (_)` is used to indicate  **private** variable, which should NOT be accessed outside the class (e.g., `_items`, `_categories`).

### Encapsulating with access modifiers
1. `private`

    Only visible to member of the class
2. `protected`

    Visible within the same class and derived class
3. `public` (Default)

    Visible to all consumers

    By default, TS assumes every variable is public, unless it's explicitly defined.

## Chapter 4: Expanding and Improving Type
### Generics
- a way to decorate a component with a type syntax in such a way that it can describe a variety of types rather than a single one.
- can use with class, interface, and variable

### Type checking for JavaScript files
- if other JS files are used in the application, you can set up the `tsconfig.json` to allow the transpiler inspects all JS files too.
- To do so, add `allowJs` and `checkJs` with `ture` value to `tsconfig.json` 
  ```
  # tsconfig.json
  {
    {
      ...,
      "allowJs": true,
      "checkJs": true
    }
  }
  ```
- `allowJs` and `checkJs` tells TS to inspect and check JS files at compile time error. They should be included if the project has a mix of JS and TS working together.

### Adding Type support for native APIs
- When TS complains some missing native APIs, such as `Promise`or perhaps `browser APIs`, such as `local storage`, what it's really saying is that those APIs don't exist in the environments it's currently targeting.
- In this project, `tsconfig.json` is targeting to `es5` which doesn't cover `Promise` but if the project is always used in the specific environment, such as on the web browser, the field called `lib` can be specified in `tsconfig.json`
  ```
  # tsconfig.json
  {
    {
      ...,
      "lib": ["es2015,.promise", "webworker", "dom"]
    }
  }
  ```
- The `lib` configuration option is an array of names of optional libraries that TypeScript knows about, but does not include by default. This only affects type-checking. It has no effect on the code that TypeScript actually outputs.
- It is telling TS that these APIs will be available in your target environments.

### Adding Type support for third-party APIs
- There are jQuery and Vue used in the application
- one way to declare type for them is
  ```
  declare var Vue: any;
  ```
  However, it's not very descriptive

- Another way is install the dependencies
  
  You can search any third-party type definition on npm website by searching `@types [third-party-name]`, then install it.
