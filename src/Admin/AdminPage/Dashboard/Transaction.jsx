import React from 'react'

function Transaction() {
  return (
    <div className='ml-3 grid-cols-[60%_35%] mt-9 grid gap-3'>
      <div className='border'>
        <p className='border p-2'>Latest Transaction</p>

        <table className="w-full border-collapse">
          <thead>
            <tr className='text-sm border-b text-gray-600 font-light'>
              <th className='border-l p-2'>Date</th>
              <th className='border-l p-2'>Type</th>
              <th className='border-l p-2'>Transaction Name</th>
              <th className='border-l p-2'>Party Name</th>
              <th className='border-l p-2'>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No transactions
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
}

export default Transaction;
