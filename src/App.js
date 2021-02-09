import reducer from "./reducer"
import {createStore} from "redux"
import {Provider} from "react-redux"
import Home from "./components"

function App() {
  const store = createStore(reducer)
  return (
    <Provider store={store}>
        <Home/>
    </Provider>
  );
}

export default App;
