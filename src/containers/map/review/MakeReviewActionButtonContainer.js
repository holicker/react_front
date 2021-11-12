import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { writeReview } from "../../../modules/write";

const MakeReviewActionButtonContainer = ({ history, location, match }) => {
  const dispatch = useDispatch();
  const { title, body, review, reviewError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    review: write.review,
    reviewError: write.reviewError,
  }));

  const onPublish = () => {
    dispatch(writeReview({ title, body }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (review) {
      const { id } = review;
      const { vendorid } = match.params;
      history.push(`/map/vendor/${vendorid}/review`);
    }
    if (reviewError) {
      console.log(reviewError);
    }
  }, [history, review, reviewError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(MakeReviewActionButtonContainer);
