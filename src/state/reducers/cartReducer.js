/* 
  A function that takes a dispatched action
  and changes the state depending on action type
*/

// Initial state and action (type, payload)
const initialUserState = {
  arr: [],
};

const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'add':
      // Add to state
      console.log(`${action.type}: ${action.payload} to [${state}]`);
      // state.push(action.payload);
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
