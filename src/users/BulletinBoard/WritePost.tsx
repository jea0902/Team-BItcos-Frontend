import React from 'react'

export default function WritePost() {
  return (
    <div>
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">게시글 작성</h2>
        
            {/* <!-- 게시글 작성 폼 --> */}
            <form action="/submit-post" method="post">
                <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">제목</label>
                <input type="text" name="title" id="title" className="form-input mt-1 block w-full" placeholder="게시글 제목을 입력하세요" required />
                </div>

                <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-600">내용</label>
                <textarea name="content" id="content" className="form-textarea mt-1 block w-full" rows={8} placeholder="게시글 내용을 입력하세요" required></textarea>
                </div>

                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">게시글 작성</button>
            </form>
        </div>
    </div>
  )
}
