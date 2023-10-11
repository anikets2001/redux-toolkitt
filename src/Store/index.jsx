import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice"; // our first slice

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});

export default store;

/*--- This is our Global store, I have imported userSlice here
      to attach/connect our slice with the store 
      store is created using configureStore function which excepts 
      a single object with global reducer which contains all the 
      slices and connect them together with the store ---*/

/*--- when a reducer(method) of userSlice is called it will search it in the 
      global store come into global reducer and then go to the userSlice file 
      and finds the method there and call that particular method and perform the 
      operation by updating the state---*/