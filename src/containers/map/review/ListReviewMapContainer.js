import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import { reviewList as list } from "../../../modules/reviewlist";
import ListReviewMap from "../../../components/map/review/ListReviewMap";

const ListReviewMapContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { reviewlist, error, loading } = useSelector(({ reviewlist, loading }) => ({
    reviewlist: reviewlist.reviewlist,
    error: reviewlist.error,
    loading: loading["reviewlist/LIST_QNA"],
  }));

  useEffect(() => {
    const { username } = match.params;
    let { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    page = page - 1;
    dispatch(list({ username, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location.search]);
  return <ListReviewMap loading={loading} error={error} reviewlist={reviewlist} />;
};

export default withRouter(ListReviewMapContainer);
