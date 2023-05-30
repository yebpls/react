import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { giamCuocAction, tangCuocAction } from "../reducers/baucuaReducer";

function Cuoc({ item }) {
  const imgSrc = `./img/${item.ma}.png`; // "./img/bau.png"

  const { tongDiemCuoc } = useSelector((state) => state.baucuaReducer);
  const dispatch = useDispatch();

  const tangCuoc = () => {
    // Truyền action type và mã của con vật muốn tăng cược
    // dispatch({ type: "baucua/tang_cuoc", payload: item.ma });
    dispatch(tangCuocAction(item.ma));
  };

  const giamCuoc = () => {
    dispatch(giamCuocAction(item.ma));
  };

  return (
    <div className="text-center mt-5">
      <img src={imgSrc} alt="" style={{ width: 250 }} />
      <br />
      <br />
      <span
        className="p-3 pl-5 pr-5 bg-warning mt-2"
        style={{ borderRadius: "5%", fontSize: 25 }}
      >
        Cược:
        <button
          className="btn btn-success ml-2 mr-2"
          style={{ fontSize: 20 }}
          onClick={tangCuoc}
          disabled={tongDiemCuoc === 0}
        >
          +
        </button>
        <span className="text-success">{item.diemCuoc}</span>
        <button
          className="btn btn-success ml-2 mr-2"
          style={{ fontSize: 20 }}
          onClick={giamCuoc}
          disabled={item.diemCuoc === 0}
        >
          -
        </button>
      </span>
    </div>
  );
}

export default Cuoc;
