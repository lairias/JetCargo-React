/**Iportaciones de Reducer */
import { Provider } from "react-redux";
import { store } from "./store/store";
import JetCargoRoutes from "./routes/JetCargoRoutes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <Provider store={store}>
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <JetCargoRoutes />
      </PayPalScriptProvider>
    </Provider>
  );
}

export default App;
