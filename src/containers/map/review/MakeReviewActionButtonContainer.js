import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { writeReview } from "../../../modules/write";

const MakeReviewActionButtonContainer = ({ vendorid }) => {
  const dispatch = useDispatch();
  const { title, body, review, reviewError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    review: write.review,
    reviewError: write.reviewError,
  }));

  const onPublish = () => {
    dispatch(writeReview({ vendorid, title, body }));
  };

  const onCancel = () => {};

  useEffect(() => {
    if (review) {
    }
    if (reviewError) {
    }
  }, [review, reviewError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(MakeReviewActionButtonContainer);
