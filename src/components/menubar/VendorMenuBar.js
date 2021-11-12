import OpenColor from "open-color";
import styled from "styled-components";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const VendorMenuBarBlock = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
`;

const MenuButton = styled(BasicItem)`
  flex: 1;
  margin: 0;
  font-size: 1rem;
  button {
    color: ${OpenColor.black};
  }
`;

const VendorMenuBar = ({ match }) => {
  return (
    <VendorMenuBarBlock>
      <MenuButton>
        <LinkButton to={match.url + "/merchandise"}>상품 목록</LinkButton>
      </MenuButton>
      <MenuButton>
        <LinkButton to={match.url + "/review"}>리뷰</LinkButton>
      </MenuButton>
      <MenuButton>
        <LinkButton to={match.url + "/qna"}>문의</LinkButton>
      </MenuButton>
    </VendorMenuBarBlock>
  );
};

export default VendorMenuBar;
