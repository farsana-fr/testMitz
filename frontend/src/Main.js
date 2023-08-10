import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function Main() {
    const [tab1,setTab1]=useState([])
    const [tab2,setTab2]=useState([])
    const [tab3,setTab3]=useState([])
    const getProducts=async ()=>{
        console.log("getProducts");
        const result=await fetch("http://localhost:8000/getProductTab");
        result.json().then((res)=>{
            console.log(res.message);
            setTab1(res.message)
        })
    }
    const getPreferences=async ()=>{
        console.log("getPreferences");
        const result=await fetch("http://localhost:8000/getCustomerPrefTab");
        result.json().then((res)=>{
            console.log(res.message);
            setTab2(res.message)
        })
    }
    const getOrders=async ()=>{
        console.log("getPreferences");
        const result=await fetch("http://localhost:8000/getOrderTab");
        result.json().then((res)=>{
            console.log(res.message);
            setTab3(res.message)
        })
    }
    useEffect(()=>{
        getProducts();
        getPreferences();
        getOrders();
    },[])
  return (
    <div className='bg-purple'>
        <h3 >Given the table below</h3>

        
        <div className='tabs mt-5'>
            <div className='tab'>
                <Table striped bordered hover >
                    
              <thead className='bg-dark text-light'>
                <h4>Products</h4>
                <tr>
        
                  <th>product_id</th>
                  <th>name</th>
                  <th>price</th>
                </tr>
              </thead>
              <tbody className='bg-light'>
                
              
                {tab1?(tab1.map(e=>(
                    <tr>
                 
                    <td>{e.product_id}</td>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                  </tr>
                ))):""}
        
        </tbody>
            </Table>
        
            </div>
    
    
    
    
            <div className='tab'>
                <Table striped bordered hover >
                    
              <thead className='bg-dark text-light'>
              <h4> Customer Preferences</h4>
                <tr>
        
                  <th>preference_id</th>
                  <th>product_id</th>
                 
                </tr>
              </thead>
              <tbody className='bg-light'>
                
              
                {tab2?(tab2.map(e=>(
                    <tr>
                 
                    <td>{e.preference_id}</td>
                    <td>{e.product_id}</td>
                    
                    
                  </tr>
                ))):""}
        
        </tbody>
            </Table>
            </div>
        
            <div className='tab'>
                <Table striped bordered hover >
                    
              <thead className='bg-dark text-light'>
                <h4>Orders</h4>
                <tr>
        
                  <th>customer_id</th>
                  <th>preference</th>
                  <th>date</th>
                 
                </tr>
              </thead>
              <tbody className='bg-light'>
                
              
                {tab3?(tab3.map(e=>(
                    <tr>
                 
                    <td>{e.customer_id}</td>
                    <td>{e.preference}</td>
                    <td>{e.date}</td>
                    
                    
                  </tr>
                ))):""}
        
        </tbody>
            </Table>
            </div>

        </div>
    </div>
  )
}

export default Main