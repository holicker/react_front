import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import { merchandiseListByDomain as list } from "../../../modules/merchandiselist";
import ListMerchandiseMap from "../../../components/map/merchandise/ListMerchandiseMap";
import { initializeVendor } from "../../../modules/vendor";

const ListMerchandiseMapContainer = () => {
  const dispatch = useDispatch();
  const { merchandiselist } = useSelector(({ vendor }) => ({
    merchandiselist: vendor.visit ? vendor.visit.merchandises : null,
  }));
  const onClickLink = (id) => {};

  return (
    <ListMerchandiseMap
      merchandiselist={merchandiselist}
      onClickLink={onClickLink}
    />
  );
};

export default withRouter(ListMerchandiseMapContainer);
