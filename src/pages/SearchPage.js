import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import CategoryMerchandiseSearch from "../components/search/CategoryMerchandiseSearch";
import ListMerchandiseSearch from "../components/search/ListMerchandiseSearch";

const SearchPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SearchPageWrapper = styled(Responsive)``;

const SearchPageItem = styled(BasicItem)``;

const SearchPage = ({ match }) => {
  return (
    <SearchPageBlock>
      <SearchPageWrapper>
        <Route
          component={CategoryMerchandiseSearch}
          path={match.url + "/category"}
          exact
        />
        <Route component={ListMerchandiseSearch} path={match.url + "/list"} />
      </SearchPageWrapper>
    </SearchPageBlock>
  );
};

export default SearchPage;
