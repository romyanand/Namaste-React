
# Episode 08 - Let's get Classy

### Q/ How do you create Nested Routes react-router-dom configuration
A/ We create nested routes like this:
```
const appRouter = createBrowserRouter([
    {
        path: <path>,
        element: <component/ui>,
        children: [
            {
                path: <path>,
                element: <component/ui>
            },
            {
                path: <path>,
                element: <component/ui>
            }
        ]
    }
])
```
And then we push this configuration to the root by rendering RouterProvider compoent inside it whose value of ***router*** prop will be `appRouter`.
Also we need to create ```<Outlet />``` in order to render these children element whenver the path changes keeping all the remainng ui intact.


### Q/ Read about createHashRouter, createMemoryRouter from React Router docs


### Q/ What is order of life cycle method calls in Class Based Components
A/ Life cycle methods in class based components are called in two consecutive phases. In order to optimize the performance of our app react tries to batch the methods in phases. The phases are render and commit.

As soon as instance of a class is created, the constructor method is called.

The mounting of component starts and the render phase of component starts 

here. Now react creates virtual representation of the virtual DOM in the

memory. Commit phase starts where first the react updates the actual dom

with updated ui and then componentDidMount is called. Here commit phase ends. 

For example: Suppose we have class and two other nested classes inside it

```
class Parent extends React.Component{

    constructor(){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Child-1 />
                <Child-2 />
            </div>
        )
    }
}
```
***MOUNTING OF PARENT***
- parent constructor called    

- parent render called(creating a virtual DOM representation)

    - Child-1 constructor called

    - Child-1 render called

    - Child-2 constructor called

    - Child-2 render called

    - **(DOM updates are commited i.e. actual DOM is updated)**

    - Child-1 componentDidMount() called   

    - Child-2 componentDidMount() called

- parent componentDidMount() called

***UPDATING PARENT***  (New props/setState/forcedUpdate)
- parent render called again and the new virtual DOM is compared to the previous one to determine what needs to be updated in the actual DOM.

    - Child-1 render called

    - Child-2 render called

    - Child-1 componentDidUpdate() called   

    - Child-2 componentDidUpdate() called 

- **DOM updates are committed (actual DOM is updated)**

- parent componentDidUpdate() called

***UNMOUNTING PARENT***

- Child-1 componentWillUnmount called (if applicable)

- Child-2 componentWillUnmount called (if applicable)

- Parent componentWillUnmount called

- This is called just before the component is removed from the virtual DOM.

- While unmounting it's components react follows a top down approach i.e children are unmounted first then the parent is unmounted from the DOM.


    

### Q/ Why do we use componentDidMount
A/ It is triggered just after the component is mounted onto the DOM. 

So if we want to do something inside a component after it gets mounted, we 

can do that inside componentDidMount method.


### Q/ Why do we use componentWillUnmount? Show with example.
A/ It is triggered just before the component is unmounted from the DOM. 

So if we want to do something that happens just before the component is 
removed from the DOM , we can do that inside this method.

Most often this method is used to cleanup our code, whatever we do when the 
component is in the DOM should be cleaned before we go to the next page
i.e.another component gets mounted. 

e.g : 
```
class SomeComponent extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        setInterval(() => {
            console.log("Error")
        }, 1000)
    }

    render(){
        return(
            <div>
                <h1>This is a class component</h1>
            </div>
        )
    }
}
```

Now everytime the component is instantiated , componentDidMount gets triggered and the console of the user gets filled with this. There could be anything instead of this (any function). 

And even when we leave the page, since we ahve not cleaned our code and cleared the interval our setInterval keeps running and can potentially crash our app adn cause damamge to it's performance.

Hence we need to clean our code when our component is unmounted from the DOM.

We can do this like this:

```
...componentDidMount(){
    this.timer = setinterval(()=>{
        console.log("Error)
    }, 1000)
}

componentWillUnmount(){
    clearInterval(this.timer)
}

```


### Q/ (Research) Why do we use super(props) in constructor?

A/ In React class components, we use `super(props)` inside the constructor method to call the constructor of the parent class (i.e., `React.Component`). This is essential because our class component is inheriting functionality from `React.Component`, and we want to ensure that the parent class's constructor is properly executed before any code in our component's constructor.

Here's why we use `super(props)`:

1. **Initialization of `this`**: When we extend a class in JavaScript (in this case, extending `React.Component` to create our component), we need to call `super()` within the constructor of the child class. This ensures that the parent class's constructor is called first. In the case of React class components, this initialization is necessary to set up the internal state and other properties that React needs to manage our component.

2. **Passing `props` to the Parent Constructor**: React expects us to pass the `props` object to the parent class's constructor (`React.Component`'s constructor) to properly initialize the component with the provided props. By calling `super(props)`, we pass the `props` object to the parent constructor, allowing React to manage the component's props.

Here's an example:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Call the parent class's constructor and pass the props
    // Additional setup or initialization for our component can go here
  }

  render() {
    // our component's rendering logic
  }
}
```

Without `super(props)`, the parent class (`React.Component`) would not be properly initialized, and our component might not work as expected, especially when it comes to handling props and managing the component's state. Therefore, it's a crucial part of correctly setting up a class-based component in React.

### Q/ (Research) Why can't we have the callback function of useEffect async?
A/ In React, the `useEffect` hook is designed to handle side effects in a declarative and synchronous way. This means that the callback function passed to `useEffect` should not be marked as `async`. Here are the main reasons why `async` functions are not recommended as `useEffect` callbacks:

1. **Control Flow**: `useEffect` relies on the order in which effects are executed to maintain predictability and consistency in your component's behavior. When we mark the callback function as `async`, it introduces an asynchronous control flow. This means that you we have less control over when and in what order different effects are executed.

2. **Avoiding Race Conditions**: React expects that effects execute synchronously or at least in a predictable order. Using `async` functions can introduce race conditions where multiple asynchronous operations triggered by different effects could interleave in unpredictable ways, potentially leading to bugs that are difficult to debug.

3. **Cleanup**: `useEffect` callbacks often return cleanup functions to handle resource management and cleanup logic when the component unmounts or when dependencies change. When using an `async` function, returning a promise from the callback may not be interpreted as a valid cleanup function by React, leading to potential resource leaks.

4. **Error Handling**: `async` functions can throw exceptions that might not be properly caught or handled by React when they are used as `useEffect` callbacks. This can result in unhandled promise rejections, which are considered bad practice in JavaScript.

To work with asynchronous operations in `useEffect`, we should handle them within the synchronous context of the callback function. We can use `async/await` within the callback to wait for asynchronous operations to complete, but the callback itself should not be marked as `async`. Here's an example:

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const result = await fetchSomeData();
      // Use the result in component state or perform other operations
    } catch (error) {
      // Handle errors gracefully
    }
  };

  fetchData(); // Call the async function
}, [/* dependencies */]);
```

By structuring our code in this way, we can still work with asynchronous operations while maintaining the expected behavior and control flow of `useEffect`.