import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

const products =[
    {id:1, name: 'Mobile Phone', description: 'Samsung s10',price:'$5'},
    {id:1, name: 'Laptop', description: 'MSI GF',price:'$10'},
]

const Products = () =>{
    return(
    <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key = {product.id}
                xs={12} sm={6} md={4} lg={3}>
                <Product />
            </Grid>
        ))}
        </Grid>
    </main>
    );

}

export default Products;