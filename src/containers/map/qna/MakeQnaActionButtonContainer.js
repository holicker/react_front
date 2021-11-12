import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import WriteActionButton from "../../../components/common/WriteActionButton";
import { writeQna } from "../../../modules/write";

const MakeQnaActionButtonContainer = ({ history, location, match }) => {
  const dispatch = useDispatch();
  const { title, body, qna, qnaError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    qna: write.qna,
    qnaError: write.qnaError,
  }));

  const onPublish = () => {
    dispatch(writeQna({ title, body }));
  };

  const onCancel = () => {
    history.goBack();
  };

  console.log(`location : ${JSON.stringify(location)}}`);
  console.log(`location : ${JSON.stringify(match)}}`);
  useEffect(() => {
    if (qna) {
      const { id } = qna;
      const { vendorid } = match.params;
      history.push(`/map/vendor/${vendorid}/qna/view/${id}`);
    }
    if (qnaError) {
      console.log(qnaError);
    }
  }, [history, qna, qnaError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(MakeQnaActionButtonContainer);
