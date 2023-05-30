import React from "react";
import { useSelector } from "react-redux";
import Cuoc from "./Cuoc";

function BanChoi() {
  const { danhSachCuoc } = useSelector((state) => state.baucuaReducer);

  return (
    <div className="row">
      {danhSachCuoc.map((item) => {
        return (
          <div key={item.ma} className="col-4">
            <Cuoc item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default BanChoi;
