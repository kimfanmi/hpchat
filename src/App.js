import { Provider } from 'react-redux';
import store from './reduxes/store';
import { BrowserRouter } from 'react-router-dom';
import UserBox from './components/UserBox';

function App() {
  const user = {name:'김궁서',help:'도움도움!',state:'0'}
  const att = { };
  return (
    // <BrowserRouter>
      // <Provider store={store}>
        <div className="App">
          <UserBox user={user} att={att} />
        </div>
      // </Provider>
    // </BrowserRouter>
  );
}

export default App;
