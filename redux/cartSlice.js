import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      //total is defined above in the initial state so we can access it below using state
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
//what does cart refer to state.cart.quantity
//we do this in navbar component in useselctor function
// In the code state.cart.quantity, cart refers to the cart slice of the state object.

// In a Redux application, the state object is a JavaScript object that contains the data for the application. You can create "slices" of the state object to manage specific pieces of data with Redux.

// For example, if you have a cart slice of the state object like this:

// Copy code
// {
//   cart: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   user: {
//     name: 'John',
//     age: 30,
//   },
// }
// Then state.cart refers to the value of the cart property of the state object, which is an object with the products, quantity, and total properties.

// In this case, state.cart.quantity refers to the value of the quantity property of the cart slice of the state object. This would be the current value of the quantity property, such as 0 or 5.

// You can use a selector function and the useSelector hook to retrieve the value of state.cart.quantity inside a functional component.

// Copy code
// export const selectQuantity = state => state.cart.quantity;

// const quantity = useSelector(selectQuantity);
// This would retrieve the current value of the quantity property from the cart slice of the Redux store and store it in the quantity constant. You could then use this value to display the quantity in the component.

// Copy code
// return <div>Quantity: {quantity}</div>;

//in todos example why is that we only had just state=>state.todos but in cart function we have different 
//like state=>state.cart.quantity
//In the todo example, state => state.todos is a selector function that retrieves the value of the todos property from the state object.

// A selector function is a function that takes the state of the Redux store as an input and returns a specific value from the state.

// In the cart example, state => state.cart.quantity is a selector function that retrieves the value of the quantity property from the cart slice of the state object.

// The specific shape of the state object and the selector function will depend on the data structure and needs of your application. In the todo example, the state object has a single todos property that contains the list of todos, so the selector function only needs to return this single value. In the cart example, the state object has a cart slice that contains multiple properties (such as products, quantity, and total), so the selector function returns a specific property (quantity) from this slice of the state object.

// You can define a selector function to return any value or combination of values from the state object that you need in your application.
//goto navar component