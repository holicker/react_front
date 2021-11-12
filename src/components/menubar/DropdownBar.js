import OpenColor from "open-color";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BasicButton from "../common/BasicButton";
import { BasicLI } from "../common/BasicLI";
import { BasicUL } from "../common/BasicUL";
import { LinkButton } from "../common/LinkButton";

const DropdownBarBlock = styled(BasicUL)`
  background-color: ${OpenColor.red[3]};
`;

const DropdownSubBlock = styled(BasicUL)`
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  transform: translateY(-20px);
  margin-top: 26px;
  background-color: ${OpenColor.blue[3]};
  position: absolute;
`;

const DropdownHead = styled(BasicLI)`
  text-align: center;
  background-color: ${OpenColor.blue[1]};
  position: relative;

  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY (0);
  }
`;

const DropdownButton = styled(BasicLI)`
  width: 150px;
  background-color: ${OpenColor.blue[1]};
  text-align: center;
`;
const DropdownBar = ({onFindMyVendor}) => { // 여기 전달할 때에는 항상 {}를 해줘야 한다!! json으로 넘어가는 듯?
  return (
    <DropdownBarBlock>
      <DropdownHead>
        MY VENDOR
        <DropdownSubBlock>
          <DropdownButton>
          <BasicButton onClick={onFindMyVendor}>나의 상점 방문</BasicButton>

          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/manage"}>상점 관리</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/merchandise"}>물품 관리</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/transaction"}>거래 관리</LinkButton>
          </DropdownButton>
        </DropdownSubBlock>
      </DropdownHead>
      <DropdownButton></DropdownButton>
    </DropdownBarBlock>
  );
};

export default DropdownBar;
