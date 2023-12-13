import React, { useState } from 'react'

export default function KrwUsdtHoldTABS() {

    const [activeTab, setActiveTab] = useState("원화");

    const handleTabClick = (tabName : string) => {
        setActiveTab(tabName);
    }


  return (
    <div>

        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block p-4 ${activeTab === '원화'? 'border-b-4 border-blue-500 text-blue-600 font-extrabold' : ''} text-black-600 rounded-t-lg dark:text-blue-500`}
                        onClick={() => handleTabClick("원화")}
                    >
                        원화
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block p-4 ${activeTab === 'USDT'? 'border-b-4 border-blue-500 text-blue-600 font-extrabold' : ''} text-black-600 rounded-t-lg dark:text-blue-500`}
                        onClick={() => handleTabClick("USDT")}
                    >
                        USDT
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className={`inline-block p-4 ${activeTab === '보유'? 'border-b-4 border-blue-500 text-blue-600 font-extrabold' : ''} text-black-600 rounded-t-lg dark:text-blue-500`}
                        onClick={() => handleTabClick("보유")}
                    >
                        보유
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}
