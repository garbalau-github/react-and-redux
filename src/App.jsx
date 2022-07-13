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
  const cart = useSelector((state) => state.cart);
  const state = useSelector((state) => state);
  console.log(state);

  // Have the cart object
  console.log(cart.arr);

  // Dispatch object initialized
  const dispatch = useDispatch();

  // Bind Action Creators and add dispatch, then destructure them for us
  // and now have access to Action Creatores in our component
  const { addToCart, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // Static items
  const items = ['Water', 'Bananas', 'Juice', 'Apples'];

  return (
    <div style={{ padding: '20px' }}>
      <>
        <h2>Balance: {account}$</h2>
        <>
          {/* Events to dispatch actions */}
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        </>
        <div>
          <hr />
        </div>
        <div>
          <br />
          <h3>Items</h3>
          {items.map((item) => {
            return (
              <button key={item} onClick={() => addToCart(item)}>
                {item}
              </button>
            );
          })}
          <br />
        </div>
        <div>
          <h3>Cart</h3>
          {cart.arr &&
            cart.arr.map((cartElement, idx) => {
              return (
                <div key={(Math.random() * 10).toString()}>
                  <span>
                    {idx + 1} {cartElement}
                  </span>
                </div>
              );
            })}
        </div>
      </>
    </div>
  );
};

export default App;
