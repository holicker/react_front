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

const VendorMenuBar = ({ onMenuClick }) => {
  return (
    <VendorMenuBarBlock>
      <MenuButton onClick={() => onMenuClick("merchandise")}>
        상품 목록
      </MenuButton>
      <MenuButton onClick={() => onMenuClick("review")}>리뷰</MenuButton>
      <MenuButton onClick={() => onMenuClick("qna")}>문의</MenuButton>
    </VendorMenuBarBlock>
  );
};

export default VendorMenuBar;
