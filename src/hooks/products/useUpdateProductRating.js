
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateProductRating } from "../../services/productService";


export const useUpdateProductRating=()=>{
    const queryClient=useQueryClient()
    return useMutation({
        mutationFn:updateProductRating,
        onMutate:async({id,newRating})=>{
            const previousData=queryClient.getQueryData(["products"])
            queryClient.setQueryData(["products"],(oldProducts)=>{
                return oldProducts.map(product=> product.id===id?{...product,Rating:newRating}:product)
            })
            return {previousData}

        },
        onError:(error,variables,context)=>{
            queryClient.setQueryData(["products"],context.previousData)
        },
        onSuccess:()=>{
            
            queryClient.invalidateQueries({
                queryKey:["products"]
            })
        }
    })

}