import { useEffect, useState } from "react";
import BlogContext from "./contexts/blogContext";
import axios from "axios";


const BlogProvider = ({children}) => {
    const [blogs,setBlogs]=useState([])
     
    useEffect(()=>{
        const getBlogs = async () => {
      const response = await axios.get(
        "https://6a6659c3189fe5869eb68008.mockapi.io/Blogs",
      );

      setBlogs(response.data);
    };

    getBlogs();

    },[])
    return ( 
    <BlogContext.Provider value={{blogs}}>
        {children}
    </BlogContext.Provider> );
}
 
export default BlogProvider;