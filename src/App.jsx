// Now we have the access to our Redux global state, we need this hook
import { useSelector } from 'react-redux';

// We need to use this hook for Action Creators
import { useDispatch } from 'react-redux';

// We need this method to bind Action Creators
import { bindActionCreators } from 'redux';

// Action Creator is a function that dispatches an action to the reducer
// and then reducer understands what is requested and manipulates the store
import { actionCreators } from './state/index';

const App = () => {
  const account = useSelector((state) => state.account);
  // Now we have the store object in the component
  console.log(account);

  // Dispatch object initialized
  const dispatch = useDispatch();

  // Bind Action Creators and add dispatch, then destructure them for us
  // and now have access to Action Creatores in our component
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className='App'>
      <>
        <h2>Balance: {account}$</h2>
        <>
          {/* Events to dispatch actions */}
          <button onClick={() => depositMoney(1000)}>Deposit $</button>
          <button onClick={() => withdrawMoney(1000)}>Withdraw $</button>
        </>
      </>
    </div>
  );
};

export default App;
