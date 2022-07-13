import { useState } from 'react';

// Now we have the access to our Redux global state, we need this hook
import { useSelector } from 'react-redux';

const App = () => {
  // Return state from the state
  const state = useSelector((state) => state);

  // Now we have the store object in the component
  console.log(state);

  return <div className='App'>Hello World</div>;
};

export default App;
