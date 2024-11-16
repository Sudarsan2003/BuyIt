import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard.js';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.in/api/products`)
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterProducts(selectedCategory, priceRange);
  };

  const handlePriceChange = (event) => {
    const selectedPriceRange = event.target.value;
    setPriceRange(selectedPriceRange);
    filterProducts(category, selectedPriceRange);
  };

  const filterProducts = (category, priceRange) => {
    let filtered = products;
    if (category) {
      filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

   
    if (priceRange) {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(product => product.price < 50);
          break;
        case 'medium':
          filtered = filtered.filter(product => product.price >= 50 && product.price < 150);
          break;
        case 'high':
          filtered = filtered.filter(product => product.price >= 150);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
    <div className='products-container'>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="gaming">Gaming</MenuItem>
          <MenuItem value="audio">Audio</MenuItem>
          <MenuItem value="mobile">Mobile</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          onChange={handlePriceChange}
          label="Price Range"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="low">Under $50</MenuItem>
          <MenuItem value="medium">$50 - $150</MenuItem>
          <MenuItem value="high">Over $150</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
            id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
      </div>
      </>
  );
}
export default Products;
