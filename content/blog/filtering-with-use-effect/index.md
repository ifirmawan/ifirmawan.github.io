---
title: Filtering with useEffect
date: "2021-09-12T20:00:00"
description: "Handle data filtering with useEffect in ReactJS"
---

## Hello
> I'm so happy because today I've been understand what is subscriptions inside UseEffect

Let me try to make simple filter functionality with useEffect.

Imagine you have products list, and each item has an attributes following :
  - Product Name
  - Price
  - Size and
  - Description

then you have filtering terms keyword and dropdown size.

So, you can write useEffect like this 

```javascript
import React, { useEffect, useState } from 'react';
import items from '../json/products.json'; // json file as data dummy for example.

const ProductPage = () => {
  const [products, setProducts] = useState(items);
  const [size, setSize] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [loading, setLoading] = useState(true); // Loading is true each page first load

  const handleOnFiltering = (size, keyword) => {
    const p = [
      ...products.filter((p) => {
        return p.size === size && (p.name.includes(keyword) || p.description.includes(keyword) || p.price.includes(keyword));
      });
    ];
    setProducts(p);
  }

  useEffect((){
    /**
    * KEEP IN MIND
    * Please add conditional updating state to avoid memory leak caused loop forever then your server is down badly.
    * In this case, I'm using loading to handle conditional updating products state.
    **/
    if (loading) {
      setLoading(false);
      handleOnFiltering(size, keyword);
    }
  }, [loading, size, keyword]); // Add size and keyword state as subscriptions
  
  return (
    <div>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            setLoading(true);
            setKeyword(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setLoading(true);
            setSize(e.target.value);
          }}
          value={size}
        >
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
      </div>
      {loading
        ? <>Loading...<>
        : (
          <ul>
            {products.map((p, key) => <li key={key}>{p.name} | {p.price} | {p.description}</li>)}
          </ul>
        )
      }
    </div>
  )
}

export default ProductPage;

```

## Try it! 

Good Luck :D