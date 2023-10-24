import {useState} from 'react'
import './index.css'
import Navbar from '../../components/NavBar'
import Products from '../../components/Products'
import AddProduct from '../../components/AddProduct'

function Home({isChange,setIsChange}) {
    const [isUpdate,setIsUpdate]=useState(false);
    const [item,setItem]=useState({});
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
