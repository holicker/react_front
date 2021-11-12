import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import ListMerchandiseMapContainer from "../../containers/map/merchandise/ListMerchandiseMapContainer";
import ListQnaMapContainer from "../../containers/map/qna/ListQnaMapContainer";
import ListReviewMapContainer from "../../containers/map/review/ListReviewMapContainer";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import VendorMenuBar from "../menubar/VendorMenuBar";
import ListReviewMap from "./review/ListReviewMap";
import ViewVendorInfoMap from "./ViewVendorInfoMap";

const ViewVendorMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 0px 0px;
  background-color: ${OpenColor.gray[5]};
  display: ${(props) => (props.viewVendor ? "flex" : "none")};
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

  &.merchandise {
    display: ${(props) => (props.view ? "block" : "none")};
  }

  &.review {
    display: ${(props) => (props.view ? "block" : "none")};
  }

  &.qna {
    display: ${(props) => (props.view ? "block" : "none")};
  }
`;

const ViewVendorMap = ({ vendor, viewType, viewVendor, onMenuClick, page, vendorid, reviewlist}) => {
  return (
    <ViewVendorMapBlock viewVendor={viewVendor}>
      <ViewVendorMapWrapper>
        <ViewVendorMapItem className="info">
          <ViewVendorInfoMap vendor={vendor} />
        </ViewVendorMapItem>

        <ViewVendorMapItem className="menu">
          <VendorMenuBar onMenuClick={onMenuClick} />
        </ViewVendorMapItem>

        <ViewVendorMapItem
          className="merchandise"
          view={viewType === "merchandise"}
        >
          <ListMerchandiseMapContainer />
        </ViewVendorMapItem>
        <ViewVendorMapItem className="review" view={viewType === "review"}>
         <ListReviewMap page={page} vendorid={vendorid} reviewlist={reviewlist}/>
        </ViewVendorMapItem>
        <ViewVendorMapItem className="qna" view={viewType === "qna"}>
          <ListQnaMapContainer />
        </ViewVendorMapItem>
      </ViewVendorMapWrapper>
    </ViewVendorMapBlock>
  );
};

export default ViewVendorMap;

/* <Route
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
          /> */
