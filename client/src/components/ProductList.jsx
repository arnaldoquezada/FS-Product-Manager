import React,  { useEffect, useState } from "react"
import '../styles/App.scss';
import Table from 'react-bootstrap/Table'
import { Button, } from 'react-bootstrap';


import productService from '../services/productService';

const ProductList = () => {

    const [ product, setProduct] = useState([]);
    const prodService = new productService;

    const getProducts = async  () => {
        const prods = await prodService.getAllProducts()
        console.log(prods)
        setProduct(prods);
    }
    useEffect(async ()=>{
        await getProducts();   
    },[])

    return (

        <div className="table-style">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.length > 0 ? (
                            product.map((p, idx) => (
                                <tr key="idx">
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>{p.description}</td>
                                    <td>
                                        <Button variant="danger">Delete</Button> <Button variant="warning">Modified</Button>
                                    </td>
                                </tr>
                            ))
                        ) : 'No products found'
                    }
                </tbody>
            </Table>
        </div>

    )
}
export default ProductList;