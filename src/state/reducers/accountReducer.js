/* 
  A function that takes a dispatched action
  and changes the state depending on action type
*/

// Initial state and action (type, payload)
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'deposit':
      // Add to state
      return state + action.payload;
    case 'withdraw':
      // Subtract from state
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
