//OrderList.js
import React, { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import './OrderList.css'; 
const ordersKey = 'orders';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    setOrders(storedOrders);
  }, []);

  const validTables = [1, 2, 3];

  const addToBill = (orderId, price, dish, table) => {
    if (!validTables.includes(Number(table))) {
      alert('Please enter a valid table number (1, 2, or 3).');
      return;
    }

    // Find all orders for the table
    const existingOrdersForTable = orders.filter(order => order.table === table);

    // Add the new order to the existing orders for the table
    const newOrder = { id: Number(orderId), price, dish, table };
    const newOrders = [...orders, newOrder];

    setOrders(newOrders);
    saveOrdersToLocalStorage(newOrders);

    // Clear the Order ID input after adding the order
    setOrderId('');
  };

  const deleteOrder = order => {
    const updatedOrders = orders.filter(item => item !== order);
    setOrders(updatedOrders);
    saveOrdersToLocalStorage(updatedOrders);
  };

  const saveOrdersToLocalStorage = orders => {
    localStorage.setItem(ordersKey, JSON.stringify(orders));
  };

  // Group orders by table number
  const groupedOrders = {};
  orders.forEach(order => {
    if (!groupedOrders[order.table]) {
      groupedOrders[order.table] = [];
    }
    groupedOrders[order.table].push(order);
  });

  return (
    <div>
      {/* Add order form */}
      <form
        onSubmit={e => {
          e.preventDefault();
          const orderId = e.target.elements.orderId.value;
          const price = e.target.elements.price.value;
          const dish = e.target.elements.dish.value;
          const table = e.target.elements.table.value;
          addToBill(orderId, price, dish, table);
        }}
      >
        <label>
          Order ID:
          <input type="number" name="orderId" value={orderId} onChange={e => setOrderId(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" name="price" />
        </label>
        <label>
          Dish:
          <input type="text" name="dish" />
        </label>
        <label>
          Table:
          <select name="table">
            {validTables.map(table => (
              <option key={table} value={table}>
                {table}
              </option>
            ))}
          </select>
        </label>
        <button name="add" type="submit">Add to Bill</button>
      </form>
      <div><h1>Orders</h1></div>
      {/* Display orders grouped by table */}
      {validTables.map(table => (
        
        <div key={table}>

          <h2>Table {table}</h2>
          {groupedOrders[table]?.map(order => (
            <OrderItem key={order.id} order={order} onDelete={() => deleteOrder(order)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderList;
