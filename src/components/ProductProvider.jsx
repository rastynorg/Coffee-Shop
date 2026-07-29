import { useEffect, useState } from "react";
import ProductContext from "./contexts/productContext";
import axios from "axios";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const newProducts=products.filter(product=>product.Newest===true)
  const bestSellerProducts=products.filter(product=>product.BestSeller===true)
 
  

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://6a6659c3189fe5869eb68008.mockapi.io/Products",
      );

      setProducts(response.data);
    };

    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products,newProducts,bestSellerProducts,updateRating }}>
      {children}
    </ProductContext.Provider>
  );

   async function updateRating (id, newRating){
  try {

    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? { ...product, Rating: newRating }
          : product
      )
    );
    
    await axios.put(`https://6a6659c3189fe5869eb68008.mockapi.io/Products/${id}`, {
      Rating: newRating,
    });

    
    
  } catch (error) {
    console.error(error);
  }
};
};

export default ProductProvider;
