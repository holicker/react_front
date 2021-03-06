import OpenColor from "open-color";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import styled from "styled-components";
import MakeReviewMapContainer from "../../../containers/map/review/MakeReviewMapContainer";
import { reviewList } from "../../../modules/reviewlist";
import MakeReviewPage from "../../../pages/MakeReviewPage";
import BasicButton from "../../common/BasicButton";
import { BasicDiv } from "../../common/BasicDiv";
import { BasicItem } from "../../common/BasicItem";
import MakeReviewMap from "./MakeReviewMap";

const ListReviewMapBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListReviewMapItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListReviewComponent = styled(BasicItem)`
  color: ${OpenColor.gray[9]};
  background-color: ${OpenColor.pink[2]};
  &.photo {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  &.title {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &.info {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &.desc {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
  }
`;

const ReviewItem = ({ review }) => {
  const { title, body, writer, registeredDate } = review;
  return (
    <ListReviewMapItem>
      <ListReviewComponent className="photo">사진</ListReviewComponent>
      <ListReviewComponent className="title">{title}</ListReviewComponent>
      <ListReviewComponent className="info">
        별점 등 정보{registeredDate}
      </ListReviewComponent>
      <ListReviewComponent className="desc">{body}</ListReviewComponent>
    </ListReviewMapItem>
  );
};

const ListReviewMap = ({ reviewlist, page, vendorid, vendor, location }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    vendorid && dispatch(reviewList({ vendorid, page }));
  }, [dispatch, vendorid, page, location]);

  return (
    <ListReviewMapBlock>
      <BasicButton>리뷰 작성</BasicButton>
      <MakeReviewPage vendorid={vendorid} vendor={vendor} />
      {reviewlist && (
        <div>
          {reviewlist.content.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>
      )}
    </ListReviewMapBlock>
  );
};

export default withRouter(ListReviewMap);
