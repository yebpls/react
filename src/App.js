import Welcome from "./1_Component/Welcome";
import Home from "./BT_HomeLayout/Home";
import Shop from "./BT_ShopLayout/Shop";
import MSILayout from "./BT_MSILayout/MSILayout";
import Databinding from "./2_Databinding/Databinding";
import ConditionalRendering from "./3_ConditionalRendering/ConditionalRendering";
import List from "./4_List/List";
import Event from "./5_Event/Event";
import Style from "./6_Style/Style";
import State from "./7_State/State";
import SelectCar from "./BT_SelectCar/SelectCar";
import Props from "./8_Props/Props";
import ShoeShop from "./BT_ShoeShop/ShoeShop";
import ShopingCart from "./BT_ShopingCart/ShopingCart";
import UserManagement from "./BT_UserManagement/UserManagement";
import Effect from "./9_Effect/Effect";
import Memo from "./10_Memo/Memo";
import Ref from "./11_Ref/Ref";
import UseReducer from "./12_Hooks/UseReducer";
import CustomHooks from "./13_CustomHooks/CustomHooks";
import UseMemo from "./12_Hooks/UseMemo";
import UseCallback from "./12_Hooks/UseCallback";
import Redux from "./14_Redux/Redux";
import BauCua from "./BT_BauCua/BauCua";
import ReduxThunk from "./15_ReduxThunk/ReduxThunk";
import ReduxToolkit from "./16_ReduxToolkit/ReduxToolkit";
import Class from "./17_Class/Class";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ArticleList from "./18_Routing/ArticleList";
import ArticleDetails from "./18_Routing/ArticleDetails";
import ReactBootstrap from "./19_ReactBootstrap/ReactBootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shoe-shop" element={<ShoeShop />} />
          <Route path="/shopping-cart" element={<ShopingCart />} />

          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
        </Route>

        <Route path="react-bootstrap" element={<ReactBootstrap />} />
        <Route path="bau-cua" element={<BauCua />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
