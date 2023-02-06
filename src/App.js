import { Firstpage } from "./First";
import Second from "./Second";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from "./MyRoutes";
import './mystyle.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalContextProvider } from "./hooks/GlobalContext";
import { Provider } from "react-redux";
import myStore from './redux/store'
// import { createStore } from "redux";
// import counterReducer from "./redux/counterReducer";


function App() {
  // const myStore = createStore(counterReducer)
  return (
    <>
      {/* <Firstpage/>
      <Second/> */}
      <GlobalContextProvider>
        <Provider store={myStore}>
          <MyRoutes />
        </Provider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
