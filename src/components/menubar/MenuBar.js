import OpenColor from "open-color";
import styled from "styled-components";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";

const MenuBarBlock = styled.div`
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

const MenuBar = () => {
  return (
    <MenuBarBlock>
      <MenuButton>
        <LinkButton to={"/notice"}>공지사항</LinkButton>
      </MenuButton>
      <MenuButton>
        <LinkButton to={"/map"}>상점 지도</LinkButton>
      </MenuButton>
      <MenuButton>
        <LinkButton to={"/search/category"}>카테고리</LinkButton>
      </MenuButton>
    </MenuBarBlock>
  );
};

export default MenuBar;
