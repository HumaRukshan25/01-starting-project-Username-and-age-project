//OrderItem.js
import React from 'react';
import './OrderItem.css'; 
function OrderItem({ order, onDelete }) {
  return (
    
    
    <div>
        
       <p>
        Price: {order.price}, Dish: {order.dish}, Table: {order.table}
      </p>
      <button name="delete" onClick={onDelete}>Delete Order</button>
    </div>
  );
}

export default OrderItem;