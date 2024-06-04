import React from "react";
import NavBar from "../components/Navbar/NavBar";
import AccountStatus from "../components/AccountStatus";
import { Link } from "react-router-dom";

const DashboardUser = () => {
  // Assuming the backend provides whether the account is registered or not
  var isAccountRegistered = false;
  var accountId = localStorage.getItem("accountId");
  if (accountId !== null) {
    // Use the accountId
    isAccountRegistered = true;
  }

  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>
        <br></br>
        <br></br> 
        <div className="flex justify-center items-center h-screen">
          <div
            className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-8 max-w-md"
            data-aos="zoom-in"
          >
            <div
              id="hero"
              className="flex flex-col py-8 justify-center text-center"
            >
              <div
                className="flex flex-col justify-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h1 className="mb-5 md:text-3xl text-2xl font-bold text-blue-900">
                  Dashboard
                </h1>
                <div className="mb-5">
                  <AccountStatus isAccountRegistered={isAccountRegistered} />
                </div>
                <div className="mt-5">
                  {isAccountRegistered ? (
                    <div className="flex flex-col space-y-4">
                      <Link
                        to="/withdraw-money"
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                      >
                        Withdraw Money
                      </Link>
                      <Link
                        to="/deposit-money"
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                      >
                        Deposit Money
                      </Link>
                      <Link
                        to="/transfer-money"
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                      >
                        Transfer Money
                      </Link>
                      <Link
                        to="/transaction-history"
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                      >
                        Transaction History
                      </Link>
                      <Link
                        to="/dashboard-user-details"
                        className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                      >
                        Details
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/dashboard-user-register"
                      className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800"
                    >
                      Your account is not registered. Register now.
                    </Link>
                  )}
                </div>
                <div className="mt-8 text-center">
                  <Link to="/contact-us" className="text-blue-900">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
