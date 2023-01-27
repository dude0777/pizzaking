import Head from 'next/head'
import Layout from "../components/Layout";

import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
<Head>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
//https://www.templatemonster.com/wordpress-themes/burgar-fast-food-burger-wordpress-theme-247434.html

