import React from "react";
import { Helmet } from "react-helmet";
import AccountInfo from "../components/account-info";

function AccountPage(props) {
  return (
    <main>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <AccountInfo {...props} />
    </main>
  );
}

export default AccountPage;
