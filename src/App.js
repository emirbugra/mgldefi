import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPanel from "./components/pages/Admin/AdminPanel";
import AdminLogin from "./components/pages/AdminLogin.js";
import BuySell from "./components/pages/BuySell";
import ForgotPassword from "./components/pages/ForgotPassword";
import Home from "./components/pages/Home.js";
import Launch from "./components/pages/Launch.js";
import LogIn from "./components/pages/Login.js";
import Redirection from "./components/pages/Redirection";
import Register from "./components/pages/Register.js";
import ResetPassword from "./components/pages/ResetPassword";
import UserInfo from "./components/pages/UserInfo";
import Wallet from "./components/pages/Wallet";
import WalletAccess from "./components/pages/WalletAccess/WalletAccess.js";
import WalletLanding from "./components/pages/WalletLanding/WalletLanding.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZMmYAXfwIgeij2zd2dOzMsdBKWLG3-ME",
  authDomain: "mgldefigo.firebaseapp.com",
  projectId: "mgldefigo",
  storageBucket: "mgldefigo.appspot.com",
  messagingSenderId: "1096055561424",
  appId: "1:1096055561424:web:aa590e7a2f7c3de8bf92d5",
  measurementId: "G-PL0D18H80Q",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
function App() {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/walletphrase/:id" element={<WalletAccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/walletMain" element={<WalletLanding />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/launchpad" element={<Launch />} />
        <Route path="/ieo/:url" element={<Redirection />} />
        <Route path="/wallet" element={<Wallet />}>
          <Route path="/wallet/:id" element={<Wallet />}>
            <Route
              path="/wallet/:id/:presaleToken/:chainId"
              element={<Wallet />}
            />
          </Route>
        </Route>
        <Route path="/wallet/:id" element={<Wallet />} />
        <Route path="/p2p" element={<BuySell />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:jxt" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
