import OpenColor from "open-color";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import Responsive from "../common/Responsive";
import DropdownBar from "../menubar/DropdownBar";
import MenuBar from "../menubar/MenuBar";
import SearchBar from "../menubar/SearchBar";

const NavbarBlock = styled(BasicBlock)`
  border: 1px solid ${OpenColor.gray[5]};
  display: flex;
  position: sticky;
  top: 0;
  min-height: 2.5rem;
  justify-content: center;
  background-color: ${OpenColor.orange[9]};
  z-index: 1;
`;

const NavbarWrapper = styled(Responsive)`
  background-color: ${OpenColor.orange[1]};
  display: flex;
  align-items: center;

  .right {
    display: flex;
    flex: 1;
  }
  .center {
    flex: 1;
  }
  .left {
    flex: 1;
    .dropdown {
      flex: 1;
    }
    .paper {
      flex: 1.3;
    }
  }
`;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${OpenColor.orange[3]};
  color: ${OpenColor.orange[8]};
  font-size: 18px;
  font-weight: bold;
  border: 1px solid ${OpenColor.black};
`;

const Navbar = ({ keyword, onChangeKeyword, onFindMyVendor}) => {
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <NavItem className="right">
          <MenuBar />
        </NavItem>
        <NavItem className="center">
          <SearchBar keyword={keyword} onChangeKeyword={onChangeKeyword} />
        </NavItem>
        <NavItem className="left">
          <NavItem className="paper"></NavItem>
          <NavItem className="dropdown">
            <DropdownBar onFindMyVendor={onFindMyVendor}/>
          </NavItem>
        </NavItem>
      </NavbarWrapper>
    </NavbarBlock>
  );
};

export default withRouter(Navbar);
