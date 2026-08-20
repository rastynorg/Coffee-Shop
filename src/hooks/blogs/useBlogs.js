import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/blogService";

export const useBlogs=()=>{
    return useQuery({
        queryKey:["blogs"],
        queryFn:getBlogs
    })
}