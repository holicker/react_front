import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { initialize, writeReview } from "../../../modules/write";

const MakeReviewActionButtonContainer = ({ vendorid, history, vendor }) => {
  const dispatch = useDispatch();
  const { title, body, review, reviewError, vendordomain } = useSelector(
    ({ write, vendor }) => ({
      title: write.title,
      body: write.body,
      review: write.review,
      reviewError: write.reviewError,
      vendordomain: vendor.visit ? vendor.visit.vendorDomain : null,
    })
  );
  const onPublish = () => {
    dispatch(writeReview({ vendorid, title, body }));
    dispatch(initialize());
  };

  const onCancel = () => {};

  useEffect(() => {
    if (review) {
      history.push(`/map/${vendordomain}?review=1`);
    }
    if (reviewError) {
      console.log(reviewError);
    }
    return dispatch(initialize());
  }, [review, reviewError, vendordomain]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(MakeReviewActionButtonContainer);
