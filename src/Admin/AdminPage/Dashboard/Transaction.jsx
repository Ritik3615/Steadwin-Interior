import React from 'react'

function Transaction() {
  return (
    <div className='ml-3 grid-cols-[60%_35%] mt-9 grid gap-3'>
        <div className='border'>
            <p className='border p-2'>Latest Transaction</p>
            <table>
                <thead>
                    <tr className='text-sm border-b grid grid-cols-5 text-gray-600 font-light '>
                        <th className='border-l'>Date</th>
                        <th className='border-l'>Type</th>
                        <th className='border-l'>Transaction Name</th>
                        <th className='border-l'>Party Name</th>
                        <th className='border-l'>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    <td></td>
                </tbody>
            </table>
        </div>
        <div></div>
    </div>
  )
}

export default Transaction