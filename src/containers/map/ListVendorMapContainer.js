import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import ListVendorMap from "../../components/map/ListVendorMap";
const ListVendorMapContainer = ({ location, match, history }) => {
  const { vendorlist, error, loading } = useSelector(({ vendor, loading }) => ({
    vendorlist: vendor.vendorlist,
    error: vendor.vendorError,
    loading: loading["vendorlist/LIST_vendor"],
  }));

  const onClickLink = (id) => {
    history.push(match.url + `/${id}`);
  };

  return (
    <ListVendorMap
      loading={loading}
      error={error}
      vendorlist={vendorlist}
      onClickLink={onClickLink}
    />
  );
};

export default withRouter(ListVendorMapContainer);
