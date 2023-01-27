//we need to create product enpoint to handle requests for products fetching pizzas basically when we post to this we add new pizza.when we make post request to this endpoint we can make new pizza
import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.TOKEN

 await dbConnect( ); 

  if (method === "GET") {
    //we use this to fetch our data
    //we fetch this data in our index page by using axios in getserverside props by sending request to this endpoint
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
  
    try {//Product is model we imported we use create to create a new product ie pizza 
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
//When a client makes a GET request to the /api/products endpoint, the endpoint handler function is called, and it fetches a list of products from the database using the Product.find() method. It then returns the list of products in the response as JSON.

// The Axios code receives the response from the API and stores it in the res variable. The data property of the response object contains the data that the API returned in the body of the response, which in this case would be a list of product objects.

// I hope this helps clarify things! Let me know if you have any other questions.