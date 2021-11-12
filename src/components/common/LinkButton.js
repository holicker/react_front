import OpenColor from "open-color";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  text-decoration: none;
  &:link {
    color: ${OpenColor.black};
  }
  &:hover {
    color: ${OpenColor.black};
  }
  &:active {
    color: ${OpenColor.black};
  }
  &:visited {
    color: ${OpenColor.black};
  }
`;