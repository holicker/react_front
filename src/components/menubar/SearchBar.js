import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { BasicBlock } from "../common/BasicBlock";
import BasicButton from "../common/BasicButton";

const SearchbarBlock = styled(BasicBlock)`
  background-color: white;
  flex: 1;
  display: flex;
  input {
    flex: 1;
  }
  button {
  }
`;

const SearchBar = ({ history, keyword, onChangeKeyword }) => {
  const onSearchClick = (e) => {
    history.push(`/search/list?keyword=${keyword}`);
  };
  return (
    <SearchbarBlock>
      <input
        type="text"
        placeholder="검색어 입력"
        value={keyword}
        onChange={onChangeKeyword}
      />
      <BasicButton onClick={() => onSearchClick()}>검색</BasicButton>
    </SearchbarBlock>
  );
};

export default withRouter(SearchBar);
