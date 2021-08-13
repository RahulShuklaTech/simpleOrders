import './App.css';
import { useState } from 'react';




function App() {

  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (product.length > 0 && quantity > 0) {
      const order = {
        product: product,
        quantity: quantity,
        price: price,
        total: quantity * price
      };
      setOrders(orders.concat(order));
      setProduct("");
      setQuantity(0);
      setPrice(0);
      setTotal(0);
    }
  }


  return (
    <div className="App">
      <div>
      <h1>App demo Orders App</h1>
      <h6>Simple app that accepts orders and shows previous orders</h6>
      </div>
      <div className = "responsive">
      <div className="order-form">
        <div className="header">
          Place your order
        </div>
        <label>Product Name:</label>
        <input type="text" value={product} onChange={(event) => setProduct(event.target.value)} />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        <label>Price:</label>
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        <button onClick={handleSubmit}>Place Order</button>
      </div>
      { orders.length > 0 && <div className="orders">

        <h2>previous orders</h2>
        <div className ="headers">
            <h3 className = "width">Order #</h3>
            <h3 className = "width">Product</h3>
            <h3 className = "width">Qty</h3>
            <h3 className = "width">Price</h3>
            <h3 className = "width">Total</h3>
          </div>
        {
          
          
          orders.map((order, index) => {
            return (
              <div key={index} className="order">
                <div className="order-number"> {index + 1}</div>
                <div className="order-product"> {order.product}</div>
                <div className="order-quantity">{order.quantity}</div>
                <div className="order-price">{order.price}</div>
                <div className="order-total">{order.total}</div>
              </div>
            );
          }
          )
        }
      </div> }
      </div>
      

    </div>
  );

}

export default App;
