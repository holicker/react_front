import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import VendorMap from "../../components/map/VendorMap";
import qs from "qs";
import {
  changeVendorField,
  getByVendordomain,
  initializeVendor,
  initializeVendorListAndVisit,
  listVendor,
} from "../../modules/vendor";

const VendorMapContainer = ({ location, match }) => {
  const { vendorid, vendor, vendorlng, vendorlat, vendorlist, reviewlist } =
    useSelector(({ vendor, reviewlist }) => ({
      vendorid: vendor.visit ? vendor.visit.id : null,
      vendorlng: vendor.vendorlng,
      vendorlat: vendor.vendorlat,
      vendorlist: vendor.vendorlist,
      vendor: vendor.visit,
      reviewlist: reviewlist.reviewlist,
    }));

  console.log(`reviewlist : ${reviewlist}`);

  let { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const dispatch = useDispatch();

  const [lng, setLng] = useState("126.988205");
  const [lat, setLat] = useState("37.551229");
  const [viewType, setViewType] = useState("merchandise");

  const onChangeField = useCallback(
    (payload) => dispatch(changeVendorField(payload)),
    [dispatch]
  );

  const onMarkerClick = useCallback(
    (vendordomain) => {
      dispatch(getByVendordomain(vendordomain));
    },
    [dispatch]
  );

  const onMenuClick = (type) => {
    setViewType(type);
  };

  useEffect(() => {
    dispatch(listVendor());
  }, []);

  useEffect(() => {
    return dispatch(initializeVendorListAndVisit());
  }, []);

  return (
    <VendorMap
      vendorlist={vendorlist}
      onChangeField={onChangeField}
      onMarkerClick={onMarkerClick}
      vendor={vendor}
      onMenuClick={onMenuClick}
      viewType={viewType}
      lng={lng}
      lat={lat}
      page={page}
      vendorid={vendorid}
      reviewlist={reviewlist}
    />
  );
};

export default withRouter(VendorMapContainer);
