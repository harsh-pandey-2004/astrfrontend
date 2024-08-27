import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from 'react';

// Transaction data
const transactions = [
  { id: "1", description: 'Chat with Meenakshhi for 5 minutes', invoice: '', amount: -20, datetime: 'Aug 4, 2024, 6:07 PM' },
  { id: "2", description: 'Chat with Jitisha for 5 minutes', invoice: '', amount: -20, datetime: 'Aug 4, 2024, 5:58 PM' },
  { id: "3", description: 'Call with Lakshmanan for 1 minute', invoice: '', amount: 0, datetime: 'Aug 1, 2024, 5:07 PM' },
  { id: "4", description: 'Call with Lakshmanan for 1 minute', invoice: '', amount: 0, datetime: 'Aug 1, 2024, 5:05 PM' },
  { id: "5", description: 'Cashback', invoice: '', amount: 25, datetime: 'Aug 1, 2024, 3:52 PM' },
  { id: "6", description: 'Purchase of AT-Money via razorpay', invoice: 'Invoice', amount: 25, datetime: 'Aug 1, 2024, 3:52 PM' },
  { id: "7", description: 'Chat with Pramita for 3 minutes', invoice: '', amount: 0, datetime: 'May 30, 2024, 11:22 AM' },
];

const TransactionTable = () => {
  const [arr, setArr] = useState([]);

  function deleteHandler(id) {
    setArr(() => {
      return arr.filter((obj) => obj.id !== id);
    });
  }

  useEffect(() => {
    setArr(transactions);
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Description</th>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Invoice</th>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Transaction Amount</th>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Datetime</th>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((transaction) => (
              <tr key={transaction.id} className="bg-white">
                <td className="px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base">{transaction.description}</td>
                <td className="px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base">{transaction.invoice}</td>
                <td
                  className={`px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}
                >
                  {transaction.amount}
                </td>
                <td className="px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base">{transaction.datetime}</td>
                <td className="px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base">
                  <MdDeleteForever className="cursor-pointer text-red-700" onClick={() => deleteHandler(transaction.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {arr.length > 0 && (
        <div className="w-full flex items-center justify-center mt-4">
          <button
            className="text-red-700 border border-red-700 text-sm sm:text-base px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition"
            onClick={() => { setArr([]); }}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
