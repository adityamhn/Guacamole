import { QueryClient, QueryClientProvider } from "react-query";

// redux
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "../store";

const persistor = persistStore(store);

const queryClient = new QueryClient();

import "../styles/globals.scss";

// ant design
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
