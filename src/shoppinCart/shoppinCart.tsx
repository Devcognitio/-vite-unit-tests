import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductCart extends Product {
    quantity: number;
}

export const  ShoppingCart = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  const [ products ] = useState(initialProducts);
  const [cart, setCart] = useState<{[key: number]: ProductCart}>({}); // Usamos un objeto para el carrito

  const addToCart = (product: Product, quantity: number) => {
    if(!quantity){
        return;
    }
    if (cart[product.id]) {
      const updatedCart = { ...cart };
      updatedCart[product.id].quantity = quantity;
      setCart(updatedCart);
    } else {
      const updatedCart = { ...cart, [product.id]: { ...product, quantity } };
      setCart(updatedCart);
    }
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = { ...cart };
    delete updatedCart[product.id];
    setCart(updatedCart);
  };

  const cartTotal = Object.values(cart).reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <input
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) => addToCart(product, parseInt(e.target.value))}
              />
              <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {Object.values(cart).map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} x {product.quantity}
              <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
        <p>Total: ${cartTotal}</p>
      </div>
    </div>
  );
}

