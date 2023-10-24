import React from 'react'
import { Button } from 'antd';
import './index.css'

function MyCard({ setItem, item, handelDeleteItem, setIsUpdate }) {

    const hanndelUpadte = () => {
        setIsUpdate(true);
        setItem(item);
   }

    

    return (
        <div className='itemCard'>
            <div className="img">
                <img src={item.img} alt="" />
            </div>
            <div className="itemInfo">
                <h3>{item.name}</h3>
                <p>{`${item.price} Rs`}</p>
                <div style={{ padding: "10px" }}>
                    <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => handelDeleteItem(item._id) } >Delete</Button>
                    <Button style={{ backgroundColor: "green", color: "white" }} onClick={hanndelUpadte} >Update</Button>
                </div>

            </div>
        </div>
    )
}

export default MyCard
