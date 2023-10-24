import React, { useEffect, useState } from 'react'
import './index.css'
import MyCard from '../card';
import { handelDeleteItem } from '../../utils/changeData';
import { getProducts } from '../../services/product.service';
import { Pagination } from '@mui/material';
function Products({setIsChange, isUpdate,isChange, setIsUpdate, setItem }) {
    const [myProducts, setProducts] = useState([]);
    const [count , setcount] = useState(0);
    const [page , setpage] = useState(1);
    const getAllProducts=async (id)=>{
        try {    
            const {data} = await  getProducts(page);
            console.log(data)
            setProducts(data.products); 
            setcount(data.totalPages)   
        } catch (error) {
            console.log(error)
        }    
    }
   
    useEffect(() => {
        getAllProducts();
    }, [isChange,isUpdate])

    const handelDelete = (id) => {
        handelDeleteItem(id,isChange)
        setTimeout(() => {
            setIsChange(!isChange);
        }, 400);
    }

    const handleChange = (e, p) => {
        setpage(p);
        getAllProducts();
    }
    

    return (
        <div className='products'>
    <div className="heading">
        <h2>My Products</h2>
    </div>
    <div className="content">
        {myProducts &&
            myProducts.map((item, i) => {
                if (item.name !== '') {
                    return (
                        <MyCard
                            key={item._id}
                            setItem={setItem}
                            item={item}
                            handelDeleteItem={handelDelete}
                            setIsUpdate={setIsUpdate}
                        />
                    );
                }
                return null; 
            })}
            
    </div>
    <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className='Pagination'
      />
</div>

    )
}

export default Products