// =============== Action types ===============
// Thường sẽ tách ra làm 1 file riêng để định nghĩa action types. VD: baucuaConstants.js
const TANG_CUOC = "baucua/tang_cuoc";
const GIAM_CUOC = "baucua/giam_cuoc";
const BAT_DAU = "baucua/bat_dau";

// =============== Actions creator ===============
// Thường sẽ tách ra làm 1 file riêng để định nghĩa actions creator. VD: baucuaActions.js
export const tangCuocAction = (ma) => {
  return { type: TANG_CUOC, payload: ma };
};
export const giamCuocAction = (ma) => {
  return { type: GIAM_CUOC, payload: ma };
};
export const batDauAction = () => {
  return { type: BAT_DAU };
};

// =============== Reducer ===============
// Khai báo giá trị khởi tạo của state
const initialState = {
  tongDiemCuoc: 500,
  danhSachCuoc: [
    { ma: "bau", diemCuoc: 0 },
    { ma: "cua", diemCuoc: 0 },
    { ma: "tom", diemCuoc: 0 },
    { ma: "ca", diemCuoc: 0 },
    { ma: "nai", diemCuoc: 0 },
    { ma: "ga", diemCuoc: 0 },
  ],
  xucXac: ["bau", "bau", "bau"],
};

const MANG_XUC_XAC = ["bau", "cua", "tom", "ca", "ga", "nai"];

function baucuaReducer(state = initialState, action) {
  switch (action.type) {
    case TANG_CUOC: {
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc + 100 };
        }

        return item;
      });

      const tongDiemCuoc = state.tongDiemCuoc - 100;

      return { ...state, danhSachCuoc, tongDiemCuoc };
    }

    case GIAM_CUOC: {
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc - 100 };
        }

        return item;
      });

      const tongDiemCuoc = state.tongDiemCuoc + 100;

      return { ...state, danhSachCuoc, tongDiemCuoc };
    }

    case BAT_DAU: {
      // B1: Random ra 3 xúc xắc mới
      const xucXac = state.xucXac.map(() => {
        // random min -> max: Math.random() * (max - min + 1) + min
        const index = Math.floor(Math.random() * 6);
        return MANG_XUC_XAC[index];
      });

      // B2: Tính toán tiền thắng cược
      // Lọc ra danh sách đặt cược
      let tongDiemCuoc = state.tongDiemCuoc;
      const danhSachDatCuoc = state.danhSachCuoc.filter(
        (item) => item.diemCuoc > 0
      );
      // B2.1: Hoàn trả tiền cược
      danhSachDatCuoc.forEach((item) => {
        // Kiểm tra xúc xắc có khớp với item đã đặt cược hay không
        // Nếu có hoàn lại tiền cược
        if (xucXac.includes(item.ma)) {
          tongDiemCuoc += item.diemCuoc;
        }
      });
      // B2.2: Hoàn trả tiền thắng
      xucXac.forEach((x) => {
        const cuoc = danhSachDatCuoc.find((item) => item.ma === x);
        if (cuoc) {
          tongDiemCuoc += cuoc.diemCuoc;
        }
      });

      // B3: Reset toàn bộ điểm cược
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        return { ...item, diemCuoc: 0 };
      });

      return { ...state, xucXac, tongDiemCuoc, danhSachCuoc };
    }

    default:
      return state;
  }
}

export default baucuaReducer;
