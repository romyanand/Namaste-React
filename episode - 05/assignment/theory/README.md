# Episode 05 - Let's get Hooked

### Q/ What is the difference between Named export, Default export and \* as export
A/ **Default export**  
```
const Component = () => {...}
export default Component
    
import Component from 'relativePath'
```
We often use this type of export when we want to export a single function

**Named Export**
```
export const Component = () => {...}

import { Component } from 'relativePath'
```

We use named export to export multiple functions as one module can only contain single default export

**(\*) as export**
```
export const Component = () => {...}
export const var = 12
export function randomFunction(){...}

import * as myModule from 'realtivePath'

console.log(mymodule.var) // 12
myModule.Compoenent();
myModule.randomFunction();
```
When we export a number of functions from a module and then we
want to import all of them in a single line then we use \* for 
that. Although we need to use dot notation in order to use them.


### Q/ What is the importance of config.js file?
A/ We should try to never keep hard coded data into 
components as best practices and in order to keep our code clean.

We often keep these sort of data in another files and the most

commonly used names for those files are 
constant.js/utils.js/config.js/common.js.

### Q/ What are React Hooks?
A/ React Hooks are utilities provided by react. These are simple JavaScript Functions. 

useState and useEffect are most commonly used react hooks. They let us manage the stateful logic and side effect logic very easily.

### Q/ Why do we need a useState Hook?
A/ We often need to track some variable in our code, which means these variables change state and we need to manage their state. 

useState() hook does exactly that. It manages the states of stateful variables. 