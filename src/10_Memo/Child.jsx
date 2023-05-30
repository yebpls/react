import React, { memo } from "react";

function Child() {
  console.log("Child render");
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}

// memo sẽ ghi nhớ output của component, khi component bị kích hoạt quá trình hiển thị lại, nó sẽ đi kiểm tra các giá trị props (nếu có), nếu có bất kì giá trị props nào bị thay đổi nó sẽ tiếp tục quá trình hiển thị lại, ngược lại nó sẽ không cần thực thi quá trình hiển thị lại mà lấy output đã được ghi nhớ ở lần trước để hiển thị ra

// export default Child;
export default memo(Child);
