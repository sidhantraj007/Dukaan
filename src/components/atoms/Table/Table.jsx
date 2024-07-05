import React from 'react';
import style from './Table.module.scss';
const Table = ({data}) => {
  let bgstyle = [
    {
      backgroundColor:"lime"
    },
    {
      backgroundColor:"grey"
    },
    {
      backgroundColor:"greenyellow"
    }
  ]
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund Date</th>
          <th>Order Amount</th>
        </tr>
      </thead>
      <tbody className={style.elementContainer}>
        {data.map((order,i) => (
          <tr key={i} >
            <td className={style.orderId}>#{order.id}</td>
            <td className={style.statusContainer}><div className={style.status} style={bgstyle[order.statusCode]}></div>{order.status}</td>
            <td>{order.transactionId}</td>
            <td>{order.refundDate}</td>
            <td>₹{order.orderAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;