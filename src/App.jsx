/**Iportaciones de Reducer */
import { Provider } from "react-redux";
import { store } from "./store/store";
import JetCargoRoutes from "./routes/JetCargoRoutes";
function App() {
  return (
    <Provider store={store}>
      <JetCargoRoutes />
      
    </Provider>
  );
}

export default App;
