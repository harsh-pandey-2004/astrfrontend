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
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>Datetime</th>
            <th style={styles.headerCell}>Amount</th>
            <th style={styles.headerCell}>Transaction ID</th>
            <th style={styles.headerCell}>Status</th>
            <th style={styles.headerCell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id} style={styles.row}>
              <td style={styles.cell}>{detail.datetime}</td>
              <td style={styles.cell}>{detail.amount}</td>
              <td style={styles.cell}>{detail.transactionId}</td>
              <td
                style={{
                  ...styles.cell,
                  color: detail.status === 'COMPLETED' ? 'green' : 'red',
                }}
              >
                {detail.status}
              </td>
              <td style={styles.cell}>
                <MdDeleteForever
                  className="cursor-pointer text-red-700"
                  onClick={() => deleteHandler(detail.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {details.length > 0 && (
        <div className="w-full flex items-center justify-center">
          <button
            className="text-red-700 border border-red-700 text-base px-3 py-1 rounded-md hover:bg-red-700 hover:text-white transition mt-3"
            onClick={() => setDetails([])}
          >
            Delete All
          </button>
        </div>
      )}
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
    color: 'black',
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

export default TransactionDetailsTable;
