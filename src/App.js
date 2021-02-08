import reducer from "./reducer"
import {createStore} from "redux"
import {Prodiver} from "react-redux"

function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
