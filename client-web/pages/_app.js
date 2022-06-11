import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import "../styles/globals.scss";

// ant design
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
