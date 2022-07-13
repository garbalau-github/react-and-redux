// Now we have the access to our Redux global state, we need this hook
import { useSelector } from 'react-redux';

const App = () => {
  const account = useSelector((state) => state.account);

  // Now we have the store object in the component
  console.log(account);

  return <div className='App'>Balance: {account}$</div>;
};

export default App;
