import "./styles.css";
import axios from "axios";

axios
    .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
    .then((response) => {
        // Firstly, log response to the console,
        // inspect the response and see that it has data field
        console.log(response);

        // Assign data field of the response to
        // products variable below by destructuring
        // You can use alias
        const {data: products} = response;

        // Print names of all product to the console
        // by calling foreach  method (use arrow function)
        products.forEach((product) => console.log(product.name)); // or product["name"]

        // Get all products that contain "Şal" in their name (use filter method)
        // map filtered products to new object having only image and name field
        // assign mapped items to mappedProducts variable
        const mappedProducts = products
            .filter((product) => product["name"].includes("Şal"))
            .map((product) => ({name: product.name, image: product.image}));

        // Display the images and names of mappedProducts
        // You need to add them to the DOM
        // you need to use forEach method
        // You need to use flexbox
        // Position of image and text is up to you
        // You can use any style you wish
        for (const product of mappedProducts) {
            const productCard = document.createElement("div");
            productCard.setAttribute("id", "product-card")

            const productImage = document.createElement("img");
            productImage.setAttribute("id", "product-image");
            productImage.src = product.image;

            const productName = document.createElement("div");
            productName.setAttribute("id", "product-name");
            productName.append(document.createTextNode(product.name));

            productCard.appendChild(productImage);
            productCard.appendChild(productName);

            document.getElementById("flex-container").appendChild(productCard);
        }
    });
