import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { withRouter } from "react-router";
import { merchandiseListByDomain as list } from "../../../modules/merchandiselist";
import ListMerchandiseMap from "../../../components/map/merchandise/ListMerchandiseMap";
import { initializeVendor } from "../../../modules/vendor";
import {
  initializeMerchandise,
  readMerchandise,
  unloadMerchandise,
} from "../../../modules/merchandise";

const ListMerchandiseMapContainer = () => {
  const dispatch = useDispatch();
  const { merchandiselist, merchandise } = useSelector(
    ({ vendor, merchandise }) => ({
      merchandiselist: vendor.visit ? vendor.visit.merchandises : null,
      merchandise: merchandise,
    })
  );
  const [modal, setModal] = useState(false);
  const onClickLink = (id) => {
    dispatch(readMerchandise(id));
    console.log(`id : ${id}`);
    setModal(true);
  };
  const onClickClose = () => {
    setModal(false);
    dispatch(unloadMerchandise());
  };

  useEffect(() => {}, [merchandise]);

  return (
    <ListMerchandiseMap
      merchandiselist={merchandiselist}
      merchandise={merchandise}
      onClickLink={onClickLink}
      onClickClose={onClickClose}
      modal={modal}
    />
  );
};

export default withRouter(ListMerchandiseMapContainer);
