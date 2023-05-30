import { configureStore } from "@reduxjs/toolkit";

// import countReducer from "./reducers/countReducer";
import countReducer from "./slices/countSlice";
// import userReducer from "./reducers/userReducer";
import userReducer from "./slices/userSlice";

import todoReducer from "./reducers/todoReducer";
import baucuaReducer from "./reducers/baucuaReducer";

// // redux middleware
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("[loggerMiddleware]", action);

//   next(action);
// };

// // async middleware
// const asyncMiddleware = (store) => (next) => (action) => {
//   // Kiểm tra xem action có phải là một function hay không
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }

//   // action là một object bình thường
//   next(action);
// };

// Tạo redux store nắm giữ state của ứng dụng
const store = configureStore({
  reducer: {
    countReducer: countReducer,
    todoReducer,
    baucuaReducer,
    userReducer,
  },
  // Mặc định configureStore đã hỗ trợ một vài middleware trong có có redux-thunk
  // redux-thunk: mặc định redux chỉ nhận action là một plain object, redux thunk là middleware cho phép viết action là một function nhận vào 2 tham số là dispatch và getState cho phép ta viết async logic
  // middleware: [loggerMiddleware, asyncMiddleware],
});

export default store;

// ================ Giải thích các hàm của redux ================
// // store.subscribe(callback): Hàm theo dõi sự thay đổi state của store, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback
// store.subscribe(() => {
//   // store.getState(): Hàm dùng để lấy ra state hiện tại của store
//   console.log("Giá trị state của store:", store.getState());
// });

// // store.dispatch(action)
// // Cách duy nhất để cập nhật state trong store là dùng hàm dispatch để gửi một action
// // action là một plain object, có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào
// store.dispatch({ type: "increment" }); // {count: 1}
// store.dispatch({ type: "increment" }); // {count: 2}
// store.dispatch({ type: "decrement" }); // {count: 1}

// function fetchData(userId) {
//   return (dispatch, getState) => {
//     // Xử lý call API
//     setTimeout(() => {
//       dispatch({ type: "GET_DATA_SUCCESS", payload: "OK" });
//     }, 5000);
//   };
// }

// store.dispatch(fetchData("userId"));
