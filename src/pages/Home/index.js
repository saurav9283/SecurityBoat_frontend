import {useEffect, useState} from 'react'
import './index.css'
import Navbar from '../../components/NavBar'
import Products from '../../components/Products'
import AddProduct from '../../components/AddProduct'
import { Navigate, useNavigate } from 'react-router-dom'

function Home({isChange,setIsChange}) {
  const navigate = useNavigate();
    const [isUpdate,setIsUpdate]=useState(false);
    const [item,setItem]=useState({});

    useEffect(()=>{
      if(!localStorage.getItem("user"))
      {
          navigate("/login")
      }
    },[])
  return (
    <>
      <div className={isUpdate?`HomeDiv`:''}>
      <Navbar/>
      <Products setIsChange={setIsChange} isChange={isChange} isUpdate={isUpdate} setIsUpdate={setIsUpdate}  setItem={setItem}/>
      </div>
      <div>
        {
            isUpdate && <AddProduct isChange={isChange} setIsChange={setIsChange} item={item}  setIsUpdate={setIsUpdate}/>
        }
      </div>
    </>
  )
}

export default Home
