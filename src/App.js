import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import SignupPage from './pages/SignupPage';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './pages/login';
import DashboardUser from './pages/DashboardUser';
import RegisterBankAccount from './pages/RegisterBankAccount';
import WithdrawMoney from './components/WithdrawMoney';
import DepositMoney from './components/DepositMoney';
import TransferMoney from './components/TransferMoney';
import TransactionHistory from './components/TransactionHistory';
import DashboardAdmin from './pages/DashboardAdmin';
import AddUserAccount from './components/AddUserAccount';
import DeleteUserAccount from './components/DeleteUserAccount';
import SearchUserAccount from './components/SearchUserAccount';
import EditUserAccount from './components/EditUserAccount';
import DisplayUserDetails from './pages/DisplayUserDetails';
function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/dashboard-admin" element={<DashboardAdmin/>} />
            <Route path="/dashboard-user" element={<DashboardUser/>} />
            <Route path="/dashboard-user-register" element={<RegisterBankAccount/>} />
            <Route path="/withdraw-money" element={<WithdrawMoney />} />
            <Route path="/deposit-money" element={<DepositMoney />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/add-user-account" element={<AddUserAccount></AddUserAccount>} />
            <Route path="/delete-user-account" element={<DeleteUserAccount></DeleteUserAccount>} />
                <Route path="/search-user-account" element={<SearchUserAccount></SearchUserAccount>} />
                <Route path="/edit-user-account" element={<EditUserAccount></EditUserAccount>} />
                <Route path="/dashboard-user-details" element={<DisplayUserDetails></DisplayUserDetails>} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
