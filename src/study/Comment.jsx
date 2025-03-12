import React from "react";

function Comment(props) {
  return (
    <div className="flex items-center p-4 mb-2 border-1 rounded-lg border-gray-300">
      {/* 프로필 이미지 */}
      <img
        src="https://item.kakaocdn.net/do/5b050e2c4ae3efdce354e1a7535ec8d18b566dca82634c93f811198148a26065" 
        alt="profile"
        className="w-10 h-10 rounded-full mr-4"
      />

      {/* 댓글 내용 */}
      <div>
        {/* 이름 */}
        <h4 className="font-semibold text-lg text-left text-gray-800">{props.name}</h4>
        {/* 댓글 */}
        <p className="text-gray-600 mt-1">{props.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
