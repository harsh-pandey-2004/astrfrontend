import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useEffect,useState } from 'react';

// Transaction data
const transactions = [
  { id:"1",
    description: 'Chat with Meenakshhi for 5 minutes',
    invoice: '',
    amount: -20,
    datetime: 'Aug 4, 2024, 6:07 PM',
  },
  { id:"2",
    description: 'Chat with Jitisha for 5 minutes',
    invoice: '',
    amount: -20,
    datetime: 'Aug 4, 2024, 5:58 PM',
  },
  { id:"3",
    description: 'Call with Lakshmanan for 1 minute',
    invoice: '',
    amount: 0,
    datetime: 'Aug 1, 2024, 5:07 PM',
  },
  {  id:"4",
    description: 'Call with Lakshmanan for 1 minute',
    invoice: '',
    amount: 0,
    datetime: 'Aug 1, 2024, 5:05 PM',
  },
  {  id:"4",
    description: 'Cashback',
    invoice: '',
    amount: 25,
    datetime: 'Aug 1, 2024, 3:52 PM',
  },
  {  id:"5",
    description: 'Purchase of AT-Money via razorpay',
    invoice: 'Invoice',
    amount: 25,
    datetime: 'Aug 1, 2024, 3:52 PM',
  },
  {  id:"6",
    description: 'Chat with Pramita for 3 minutes',
    invoice: '',
    amount: 0,
    datetime: 'May 30, 2024, 11:22 AM',
  },
];

const TransactionTable = () => {
const[arr,setArr]=useState([]);



function deleteHandler(id){
    console.log("clicked");
   console.log(id);
   setArr(()=>{
    return arr.filter((obj)=>(obj.id!=id));
   })
    
}

useEffect(()=>{
    setArr(transactions);
},[])
   

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>Description</th>
            <th style={styles.headerCell}>Invoice</th>
            <th style={styles.headerCell}>Transaction Amount</th>
            <th style={styles.headerCell}>Datetime</th>
            <th style={styles.headerCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((transaction, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.cell}>{transaction.description}</td>
              <td style={styles.cell} >{transaction.invoice}</td>
              <td
                style={{
                  ...styles.cell,
                  color: transaction.amount > 0 ? 'green' : 'red',
                }}
              >
                {transaction.amount}
              </td>
              <td style={styles.cell}>{transaction.datetime}</td>
              <td style={styles.cell} className='cursor-pointer text-red-700' onClick={()=>{deleteHandler(transaction.id)}} transaction={transaction}><MdDeleteForever className="cursor-pointer text-red-700"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    { arr.length>0 && <div className='w-full  flex items-center justify-center'>
      <button className=' text-red-700 border border-red-700 text-base px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition mt-3 ' onClick={()=>{setArr([]);}}>Delete All</button>
      </div>}
    </div>
  );
};

const styles = {
  container: {
    paddingLeft: '64px',
    paddingRight: '64px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  headerCell: {
    color: ' black',
    padding: '8px',
    borderBottom: '1px solid black',
    textAlign: 'left',
    fontSize: '16px',
  },
  row: {
    backgroundColor: 'white',
  },
  cell: {
    color: 'black',
    padding: '8px',
    borderBottom: '2px solid yellow',
    fontSize: '14px',
  },
};

export default TransactionTable;
