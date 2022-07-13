// House all of our actions

// Takes amount (we pass it in the front-end)
export const depositMoney = (amount) => {
  // Return a function that has dispatch as a parameter
  return (dispatch) => {
    // Configuration
    dispatch({
      type: 'deposit',
      payload: amount,
    });
  };
};

// Subtracts amount (we pass it in the front-end)
export const withdrawMoney = (amount) => {
  // Return a function that has dispatch as a parameter
  return (dispatch) => {
    // Configuration
    dispatch({
      type: 'withdraw',
      payload: amount,
    });
  };
};
