import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import NaverMapAPI from "../../lib/map/NaverMapAPI";
import { changeVendorField, listVendor } from "../../modules/vendor";

const NaverMapAPIContainer = ({ match, history }) => {
  const dispatch = useDispatch();
  const { vendorlng, vendorlat, vendorlist } = useSelector(({ vendor }) => ({
    vendorlng: vendor.vendorlng,
    vendorlat: vendor.vendorlat,
    vendorlist: vendor.vendorlist,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeVendorField(payload)),
    [dispatch]
  );

  const onMarkerClick = useCallback((vendordomain) => {
    history.push(`/map/vendor/${vendordomain}`);
  }, []);

  useEffect(() => {
    dispatch(listVendor());
  }, [dispatch]);

  // { key: "vendorlng", value: e.coord.lng() }
  return (
    <NaverMapAPI
      vendorlist={vendorlist}
      onChangeField={onChangeField}
      onMarkerClick={onMarkerClick}
    />
  );
};

export default withRouter(NaverMapAPIContainer);
