import { deleteProduct, updateMyProduct } from "../services/product.service";

export const updateProduct = async (value, id) => {
    try {
        const result = await updateMyProduct(value, id);
        if (result.data.message === 'Unauthorized') {
            alert("Unauthorized");
        } else {
            console.log('Product updated successfully');
        }
    } catch (error) {
        console.log(error);
    }
    return;
}

export const handelDeleteItem = async (id, isChange) => {
    try {
        const result = await deleteProduct(id);
        if(result.data.message === 'Unauthorized')
        {
            console.log(result.data.message)
            alert("Unauthorized")
        }
        else{
            alert("Product Deleted!!")
            return isChange;   
        }
    } catch (error) {
        console.log(error);
    }
}

