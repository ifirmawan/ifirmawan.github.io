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
import React, { useEffect, useState } from 'react'
...
const [products, setProducts] = useState(null);
const [size, setSize] = useState(null);
const [keyword, setKeyword] = useState(null);


const handleOnFiltering = (size, keyword) => {
  const p = [
    ...products.filter((p) => {
      return p.size === size && (p.name.includes(keyword) || p.description.includes(keyword) || p.price.includes(keyword));
    });
  ];
  setProducts(p);
}

useEffect((){
  handleOnFiltering(size, keyword);
}, [size, keyword]); // Add size and keyword state as subscriptions
```

## Try it! 

Good Luck :D