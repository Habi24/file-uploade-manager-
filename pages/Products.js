import React, { useState } from "react";

function Products() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    alert("Item added to cart successfully!");
  };

  return (
    <section id="products">
      <h2>Available Home Decor Products:</h2>

      <div className="cart-info">
        <p> Items in Cart: <strong>{cartCount}</strong></p>
      </div>

      <div className="margin_space d-flex flex-row justify-content-start align-items-center">
        <div className="product">
          <img src="wallshelf.jpg" alt="Wall Shelf" width="200" height="200" />
          <h1 className="heading">Wooden Wall Shelf</h1>
          <p className="para">Price: ₹2,499</p>
          <button onClick={handleAddToCart} className="button">Add to Cart</button>
        </div>

        <div className="product">
          <img src="clock.jpg" alt="Wall Clock" width="200" height="200" />
          <h1 className="heading">Vintage Wall Clock</h1>
          <p className="para">Price: ₹1,299</p>
          <button onClick={handleAddToCart} className="button">Add to Cart</button>
        </div>

        <div className="product">
          <img src="Homedecor.jpg" alt="Wall Decor" width="200" height="200" />
          <h1 className="heading">Metal Home Decor</h1>
          <p className="para">Price: ₹3,499</p>
          <button onClick={handleAddToCart} className="button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
