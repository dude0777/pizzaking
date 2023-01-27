
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//we store the reducer we createed in cartslice here.we pass collection of reducers its built into redux.we provide this store in app.js file too all filles.reducer takes in prev state or current and the action spits out an actionIn Redux, the state of the store is a single, immutable object that holds all of the data for the application. This means that the state is an object that contains properties with values that represent the different pieces of data in the application.
//
//const todos = useSelector(state => state.todos);
//so basically it returns current list of todos  right
// Yes, that's correct! In this case, the function defined with state => state.todos would return the current list of todos from the Redux store.

// This function could be passed as an argument to the useSelector hook, which would allow you to access the current list of todos inside a functional component.In this example, the state object has two properties: todos and user. The todos property is an array of todo objects, and the user property is an object that represents a user.
//The useSelector hook allows you to access values from the store state object inside a functional component. You can use a selector function as an argument to the hook to specify which value you want to retrieve from the state object.

//For example, you could use the useSelector hook to retrieve the todos array from the state object like this:

// Copy code
// const todos = useSelector(state => state.todos);



//Alen Biju
//is this state => state.todos  the selector function ur talkin about
//Yes, that's correct! In the code state => state.todos, state => state.todos is a selector function.

//A selector function is a function that takes the state of the Redux store as an input and returns a specific value from the state. In this case, the selector function is defined as state => state.todos, which means it takes the state object as an input and returns the value of the todos property of the state object.




export default configureStore({
    reducer: {
      cart: cartReducer,
    },
  });