import React from 'react'

export default function SortableTable() {
  return (
    <div>
      

        <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            한글명
                        </th>
                        <th scope="col" className="px-1 py-3">
                            <div className="flex items-center flex-row">
                                <span className='text-xs'>현재가</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                            </div>
                        </th>
                        <th scope="col" className="px-1 py-3">
                            <div className="flex items-center">
                                전일대비
                                <a href="#"><svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg></a>
                            </div>
                        </th>
                        <th scope="col" className="px-1 py-3">
                            <div className="flex items-center">
                                거래대금
                                <a href="#"><svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
        </svg></a>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            비트코인
                        </th>
                        <td className="px-4 py-4">
                            Silver
                        </td>
                        <td className="px-4 py-4">
                            Laptop
                        </td>
                        <td className="px-4 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            이더리움
                        </th>
                        <td className="px-4 py-4">
                            White
                        </td>
                        <td className="px-4 py-4">
                            Laptop PC
                        </td>
                        <td className="px-4 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            리플
                        </th>
                        <td className="px-4 py-4">
                            Black
                        </td>
                        <td className="px-4 py-4">
                            
                        </td>
                        <td className="px-4 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            솔라나
                        </th>
                        <td className="px-4 py-4">
                            Black
                        </td>
                        <td className="px-4 py-4">
                            
                        </td>
                        <td className="px-4 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            에이다
                        </th>
                        <td className="px-4 py-4">
                            Black
                        </td>
                        <td className="px-4 py-4">
                            
                        </td>
                        <td className="px-4 py-4">
                            $99
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 text-xs">
                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            도지
                        </th>
                        <td className="px-4 py-4">
                            Black
                        </td>
                        <td className="px-4 py-4">
                            
                        </td>
                        <td className="px-4 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}
