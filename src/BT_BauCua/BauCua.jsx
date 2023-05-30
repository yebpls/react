import React from "react";
import { useSelector } from "react-redux";
import BanChoi from "./BanChoi";
import XucXac from "./XucXac";

function BauCua() {
  const { tongDiemCuoc } = useSelector((state) => state.baucuaReducer);

  return (
    <div style={{ minHeight: "100vh" }} className="container-fluid bg-dark">
      <h1 className="text-center text-warning">Bầu cua Cybersoft</h1>

      {/* Hiển thị điểm cược */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="text-center mt-5">
            <span
              className="p-3 bg-warning"
              style={{
                fontSize: 25,
                borderRadius: 10,
                border: "5px solid rgb(0, 0, 0)",
              }}
            >
              Tiền thưởng:{" "}
              <span className="text-success">{tongDiemCuoc} điểm</span>
            </span>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        {/* Hiển thị bàn chơi */}
        <div className="col-8">
          <BanChoi />
        </div>
        {/* Hiển thị xúc xắc */}
        <div className="col-4">
          <XucXac />
        </div>
      </div>
    </div>
  );
}

export default BauCua;
