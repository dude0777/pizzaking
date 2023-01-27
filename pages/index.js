import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Pizza Restaurant in Kerala</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
//we use server side rendering here
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
//first we fetch data using axios and we stores them in the props variable as o
  const res = await axios.get("https://pizzaking-kyyu.vercel.app/api/products");
  return {
    props: {
      //we use pizza list prop up in the component and pass data down the pizza list component
      pizzaList: res.data,
      admin,
    },
  };
};

//what is data value though is it one we define or is it given by axios
// In the context of an HTTP response, the data value is the payload of the response, which is the actual data that the API returns in the body of the response. It is not something that you define yourself, but rather it is provided by the API.

// For example, if the API returns a list of products in the response, res.data would be an array of product objects.

// In the case of the Axios library, the data property of the response object is populated with the parsed data from the response body. Axios parses the response body based on the Content-Type header of the response, and it tries to parse the body as JSON if the header is set to application/json.

// So, when you make a request to an API using Axios and the API returns a JSON response, you can access the data returned by the API through the data property of the response object.
    //we use this to fetch our data
    //we fetch this data in our index page by using axios in getserverside props by sending request to this endpoint that we created in api folder 
    //so data property is set by axios
// Yes, that's correct! When you make a request to an API using Axios and the API returns a response, the data property of the response object is populated with the parsed data from the response body. This is done automatically by the Axios library based on the Content-Type header of the response.

// For example, if the API returns a JSON response with the following body:

// Copy code
// {
//   "id": 123,
//   "name": "Product A"
// }
// Then the data property of the response object would be set to an object with the following structure: