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
...
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
...
```
You can find full source code here [ProductPage.jsx](https://gist.github.com/ifirmawan/2acf9bec2968c570788f2291fbef33c7)

If you have any questions about this post, feel free to contact me on Twitter or via Email.
## Try it! 

Good Luck :D