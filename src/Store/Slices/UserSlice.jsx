import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action){
      state.push(action.payload);      
    },
    removeUser(state, action){
      state.splice(action.payload, 1);
    },
    deleteUsers: () => [],
  },
  // extraReducers(builder){
  //   builder.addCase(userSlice.actions.deleteUsers, ()=>{
  //     return [];
  //   })
  // }

  
  extraReducers(builder){
    builder.addCase(userSlice.actions.deleteUsers, ()=>{
      return [];
    })
  }
});

// console.log(userSlice.actions); // will log all the actionCreators

export default userSlice.reducer;
export const {addUser, removeUser, deleteUsers} = userSlice.actions


// to perform any action / operation we need to pass the micro reducers from here 
// then import these micro-reducers and call them using useDispatch() hook

// let's consider a case where we want to implement the same operation for more than 
// one slice then we don't need to write the same logic in each slice we can use
// extraReducer (it will find the logic in correct slice and call that particular action for that slice)