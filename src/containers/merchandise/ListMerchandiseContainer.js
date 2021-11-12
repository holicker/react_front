import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import ListMerchandise from "../../components/merchandise/ListMerchandise";
import { merchandiseList } from "../../modules/merchandiselist";
const ListMerchandiseContainer = ({ history, match }) => {
  const { vendorid, list } = useSelector(({ vendor, merchandiselist }) => ({
    vendorid: vendor.vendorid,
    list: merchandiselist.merchandiselist,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(merchandiseList({ vendorid }));
  }, [dispatch, vendorid]);

  const onClickLink = (id) => {
    history.push(match.url + `/view/${id}`);
  };

  return <ListMerchandise list={list} onClickLink={onClickLink} />;
};

export default withRouter(ListMerchandiseContainer);
