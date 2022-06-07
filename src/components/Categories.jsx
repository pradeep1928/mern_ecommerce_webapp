import React from 'react'
import styled from '@emotion/styled';

// imports from local 
import { categories } from "../data"
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';



const Container = styled.div`
   display: flex;
   padding: 20px;
   ${mobile({ padding: "0", flexDirection: 'column'})};

`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories