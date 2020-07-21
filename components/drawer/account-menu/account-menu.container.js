import { connect } from "react-redux";
import { AccountMenu } from "./account-menu.component";
import { accountMenuConnector } from "./account-menu.selectors";

export const AccountMenuContainer = connect(accountMenuConnector)(AccountMenu);
