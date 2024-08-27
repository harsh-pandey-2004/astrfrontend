import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

// Transaction data
const transactionDetails = [
  {
    id: '1',
    datetime: 'Aug 1, 2024, 3:47 PM',
    amount: '+25 (GST 4.50)',
    transactionId: '#pay_OfbHPKMAxbd23u',
    status: 'COMPLETED',
  },
  {
    id: '2',
    datetime: 'Aug 1, 2024, 3:46 PM',
    amount: '+25 (GST 4.50)',
    transactionId: '#AT-RA-1722507381550-NDE5MTM0ODA=',
    status: 'FAILED',
  },
  {
    id: '3',
    datetime: 'May 2, 2024, 5:54 PM',
    amount: '+100 (GST 18.00)',
    transactionId: '#AT-RA-1714652649299-NDE5MTM0ODA=',
    status: 'FAILED',
  },
  {
    id: '4',
    datetime: 'May 2, 2024, 5:51 PM',
    amount: '+200 (GST 36.00)',
    transactionId: '#AT-RA-1714652467939-NDE5MTM0ODA=',
    status: 'FAILED',
  },
  {
    id: '5',
    datetime: 'May 2, 2024, 5:16 PM',
    amount: '+50 (GST 9.00)',
    transactionId: '#AT-RA-1714650386407-NDE5MTM0ODA=',
    status: 'FAILED',
  },
];

const TransactionDetailsTable = () => {
  const [details, setDetails] = useState([]);

  const deleteHandler = (id) => {
    setDetails((prevDetails) =>
      prevDetails.filter((detail) => detail.id !== id)
    );
  };

  useEffect(() => {
    setDetails(transactionDetails);
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-b-black text-left text-sm sm:text-base">Datetime</th>
              <th className="px-4 py-2 border-b  border-b-black text-left text-sm sm:text-base">Amount</th>
              <th className="px-4 py-2 border-b  border-b-black text-left text-sm sm:text-base">Transaction ID</th>
              <th className="px-4 py-2 border-b  border-b-black text-left text-sm sm:text-base">Status</th>
              <th className="px-4 py-2 border-b  border-b-black text-left text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <tr key={detail.id} className="bg-white">
                <td className="px-4 py-2 border-b border-b-yellow-400 text-sm sm:text-base">{detail.datetime}</td>
                <td className="px-4 py-2 border-b  border-b-yellow-400 text-sm sm:text-base">{detail.amount}</td>
                <td className="px-4 py-2 border-b  border-b-yellow-400 text-sm sm:text-base">{detail.transactionId}</td>
                <td
                  className={`px-4 py-2 border-b  border-b-yellow-400 text-sm sm:text-base ${detail.status === 'COMPLETED' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {detail.status}
                </td>
                <td className="px-4 py-2 border-b text-sm sm:text-base">
                  <MdDeleteForever
                    className="cursor-pointer text-red-700"
                    onClick={() => deleteHandler(detail.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {details.length > 0 && (
        <div className="w-full flex items-center justify-center mt-4">
          <button
            className="text-red-700 border border-red-700 text-sm sm:text-base px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition"
            onClick={() => setDetails([])}
          >
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionDetailsTable;
