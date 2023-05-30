// Hàm reducer nhận vào 2 tham số: giá trị hiện tại của state và action sau đó return về giá trị state mới. (state, action) => newState
// - Khi hàm reducer chạy lần đầu tiên lúc khởi tạo store, giá trị của state sẽ là undefined, ta cần tạo giá trị mặc định cho state bằng default params
// - Thông thường state sẽ là một object/array, ta không được thay đổi trực tiếp giá trị của state mà phải tạo ra một object/array mới để thay đổi và return về object/array mới đó.
function countReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default countReducer;
