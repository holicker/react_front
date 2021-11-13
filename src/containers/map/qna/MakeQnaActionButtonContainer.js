import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { initialize, writeQna } from "../../../modules/write";

const MakeQnaActionButtonContainer = ({
  vendorid,
  history,
  location,
  match,
}) => {
  const dispatch = useDispatch();
  const { title, body, qna, qnaError, vendordomain } = useSelector(
    ({ write, vendor }) => ({
      title: write.title,
      body: write.body,
      qna: write.qna,
      qnaError: write.qnaError,
      vendordomain: vendor.visit ? vendor.visit.vendorDomain : null,
    })
  );

  const onPublish = () => {
    dispatch(writeQna({ vendorid, title, body }));
  };

  const onCancel = () => {};

  useEffect(() => {
    if (qna) {
      history.push(`/map/${vendordomain}/qna=1`);
    }
    if (qnaError) {
      console.log(qnaError);
    }
    return dispatch(initialize());
  }, [qna, qnaError, vendordomain]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(MakeQnaActionButtonContainer);
