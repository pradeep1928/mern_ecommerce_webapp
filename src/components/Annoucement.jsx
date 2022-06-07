import React from 'react'
import styled from '@emotion/styled'



const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    `

const Annoucement = () => {
  return (
    <Container>Super Deal free shipping on Order over $30</Container>
  )
}

export default Annoucement