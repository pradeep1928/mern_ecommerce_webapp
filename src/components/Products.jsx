import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import axios from "axios";

import { popularProducts } from "../data";
import Product from "./Product";


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    // get Proudcts by categories 
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ? `http://localhost:5000/api/products?category=${cat}`
                        : `http://localhost:5000/api/products`);

               setProducts(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [cat])

    // filter products by color and sise
    useEffect(() => {
      cat && setfilteredProducts(
          products.filter((item) => 
          Object.entries(filters).every(([key, value]) => item[key].includes(value)
      )))
    }, [cat, products, filters])


    // sort products by price and created at 
    useEffect(() => {
        if (sort === "newest") {
            setfilteredProducts((prev) => 
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        }
        else if(sort === "asc") {
            setfilteredProducts((prev) => 
                [...prev].sort((a, b) => a.price - b.price)
            );
        }
        else if(sort === "desc") {
            setfilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])


    return (
        <Container>
            {cat ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </Container>
    )
}

export default Products