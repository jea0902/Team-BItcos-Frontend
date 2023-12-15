import React from 'react'

export default function BulletinBoard() {
  return (
    <div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">게시판</h2>
        
        {/* <!-- 게시판 테이블 --> */}
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            <thead>
            <tr>
                <th className="py-2 px-4 border-b">번호</th>
                <th className="py-2 px-4 border-b">제목</th>
                <th className="py-2 px-4 border-b">작성자</th>
                <th className="py-2 px-4 border-b">작성일</th>
            </tr>
            </thead>
            <tbody>
            {/* <!-- 여기에 각 게시물 로우 추가 --> */}
            <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b"><a href="#">게시글 제목 1</a></td>
                <td className="py-2 px-4 border-b">작성자1</td>
                <td className="py-2 px-4 border-b">2023-01-01</td>
            </tr>
            {/* <!-- 추가적인 게시물 로우들을 필요에 따라 추가 --> */}
            </tbody>
        </table>

        {/* <!-- 게시글 작성 버튼 --> */}
        <div className="mt-4">
            <a href="/Write-post" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">게시글 작성</a>
        </div>
        </div>

    </div>
  )
}
