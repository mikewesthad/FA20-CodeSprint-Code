import React from "react";
import { Helmet } from "react-helmet";
import AccountInfo from "../components/account-info";

function AccountPage() {
  return (
    <main>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <AccountInfo />
    </main>
  );
}

export default AccountPage;
