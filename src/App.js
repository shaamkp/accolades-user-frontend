import { BrowserRouter } from 'react-router-dom';
import Store from './comonents/context/Store';
import MainRouter from './comonents/routing/routes/MainRouter';
import { Provider } from "react-redux" 
import {store} from "./comonents/redux/store"

function App() {
  return (
          <Store>
              <BrowserRouter>
                  <MainRouter />
              </BrowserRouter>
          </Store>
  );
}

export default App;
