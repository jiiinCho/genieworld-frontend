import React from "react";
import { Routes, Route } from "react-router-dom";
import Friend from "./page/friend/friend";
import Main from "./page/main/main";
import PageLoader from "./components/pageLoader/pageLoader";
import Shop from "./page/shop/shop";
import Cart from "./page/cart/cart";
import MyGenieService from "./service/genieService";
import Wish from "./page/wish/wish";
import SignIn from "./page/signIn/signIn";
import About from "./page/about/about";
import MySpace from "./page/myspace/myspace";
import AuthService from "./service/authService";

interface AppProps {
  genieService: MyGenieService;
  authService: AuthService;
}

const App = ({ genieService }: AppProps) => {
  return (
    <Routes>
      <Route path="/" element={<PageLoader genieService={genieService} />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/cart/:username"
        element={<Cart genieService={genieService} />}
      />
      <Route
        path="/wish/:username"
        element={<Wish genieService={genieService} />}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/genieworld"
        element={<MySpace genieService={genieService} />}
      />
      <Route path="/friend" element={<Friend />} />
      <Route path="/store" element={<Shop genieService={genieService} />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default App;
