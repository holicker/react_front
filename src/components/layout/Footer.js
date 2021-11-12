import OpenColor from "open-color";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import Responsive from "../common/Responsive";

const FooterBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.orange[2]};
  bottom: 0px;
  min-height: 50px;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled(Responsive)`
  background-color: white;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWrapper></FooterWrapper>
    </FooterBlock>
  );
};

export default Footer;
