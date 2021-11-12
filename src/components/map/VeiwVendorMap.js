import OpenColor from "open-color";
import React from "react";
import { Redirect, Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import VendorMainMap from "./VendorMainMap";
import VendorMenuBar from "../menubar/VendorMenuBar";
import ListMerchandiseMapPage from "../../pages/ListMerchandiseMapPage";
import ListQnaPage from "../../pages/ListQnaPage";
import ListReviewPage from "../../pages/ListReviewPage";
import MakeQnaPage from "../../pages/MakeQnaPage";
import MakeReviewPage from "../../pages/MakeReviewPage";
import ViewMerchandisePage from "../../pages/ViewMerchandisePage";
import ViewQnaPage from "../../pages/ViewQnaPage";
import ViewVendorInfoMapContainer from "../../containers/map/ViewVendorInfoMapContainer";

const columsNumber = 6;

const ViewVendorMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 0px 0px;
  background-color: ${OpenColor.gray[5]};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ViewVendorMapWrapper = styled(Responsive)`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ViewVendorMapItem = styled(BasicItem)`
  &.info {
    flex: 0 0 20rem;
  }

  &.content {
    flex: 2;
  }
`;

const ViewVendorMap = ({ match }) => {
  console.log({ match });

  const { vendorid } = match.params;
  return (
    <ViewVendorMapBlock>
      <ViewVendorMapWrapper>
        <ViewVendorMapItem className="info">
          <ViewVendorInfoMapContainer />
        </ViewVendorMapItem>
        <ViewVendorMapItem className="content">
          <Route
            path={[match.path, match.path + "/merchandise"]}
            exact
            component={ListMerchandiseMapPage}
          />
          <Route path={match.path + "/qna"} exact component={ListQnaPage} />

          <Route path={match.path + "/qna/:qnaid"} component={ViewQnaPage} />
          <Route
            path={match.path + "/review"}
            exact
            component={ListReviewPage}
          />

          <Route
            path={match.path + "/merchandise/:merchandiseid"}
            component={ViewMerchandisePage}
          />
          <Route path={match.path + "/qna/write"} component={MakeQnaPage} />
          <Route
            path={match.path + "/review/write"}
            component={MakeReviewPage}
          />
        </ViewVendorMapItem>
      </ViewVendorMapWrapper>
    </ViewVendorMapBlock>
  );
};

export default ViewVendorMap;
