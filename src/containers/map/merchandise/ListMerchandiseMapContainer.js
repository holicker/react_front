import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import { merchandiseListByDomain as list } from "../../../modules/merchandiselist";
import ListMerchandiseMap from "../../../components/map/merchandise/ListMerchandiseMap";
import { initializeVendor } from "../../../modules/vendor";

const ListMerchandiseMapContainer = ({ location, match, history }) => {
  const dispatch = useDispatch();
  const { merchandiselist, error, loading } = useSelector(
    ({ merchandiselist, loading }) => ({
      merchandiselist: merchandiselist.merchandiselist,
      error: merchandiselist.error,
      loading: loading["merchandiselist/LIST_MERCHANDISE"],
    })
  );
  const { vendorid } = match.params; // vendorid이지만 domain으로 쓰겠다.

  console.log(`match.params vendor domain : ${vendorid}`);

  useEffect(() => {
    dispatch(list({ vendordomain: vendorid }));
  }, [dispatch, vendorid]);

  const onClickLink = (id) => {
    history.push(match.url + `/${id}`);
  };

  return (
    <ListMerchandiseMap
      loading={loading}
      error={error}
      merchandiselist={merchandiselist}
      onClickLink={onClickLink}
    />
  );
};

export default withRouter(ListMerchandiseMapContainer);
