import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import MakeVendorForm from "../../components/vendor/MakeVendorForm";
import {
  changeVendorField,
  initializeVendor,
  registerVendor,
  setImages,
} from "../../modules/vendor";

const MakeVendorFormContainer = ({ history, match }) => {
  const {
    userid,
    vendorid,
    vendordomain,
    vendorname,
    vendorinfo,
    vendorlng,
    vendorlat,
    vendorError,
  } = useSelector(({ vendor, user }) => ({
    userid: user.id,
    vendorid: vendor.vendorid,
    vendordomain: vendor.vendordomain,
    vendorname: vendor.vendorname,
    vendorinfo: vendor.vendorinfo,
    vendorlng: vendor.vendorlng,
    vendorlat: vendor.vendorlat,
    vendorError: vendor.vendorError,
  }));
  const [images, setImages] = useState();

  const onPublish = () => {
    const formData = new FormData();
    formData.append(
      "vendor",
      new Blob([
        JSON.stringify({
          userId: userid,
          vendorDomain: vendordomain,
          vendorName: vendorname,
          vendorInfo: vendorinfo,
          vendorLat: vendorlat,
          vendorLng: vendorlng,
        }),
      ])
    );
    images &&
      Array.from(images).forEach((image) => formData.append("images", image));
    console.log(formData);
    console.log(`위의 것은 폼 데이터`);
    dispatch(registerVendor(formData));
  };

  const onCancel = () => {
    history.goBack();
  };

  const dispatch = useDispatch();
  const onChangeField = useCallback(
    (payload) => dispatch(changeVendorField(payload)),
    [dispatch]
  );

  const onChangeImage = (image) => {
    console.log(image);
    console.log(`위의 것으로 이미지 셋팅 완료!`);
    setImages(image);
  };

  useEffect(() => {
    return () => {
      if (vendorid === -1) dispatch(initializeVendor(-1));
      if (vendorid !== -1) dispatch(initializeVendor(vendorid));
    };
  }, [dispatch, vendorid]);

  useEffect(() => {
    if (vendorid !== -1) {
      localStorage.setItem("vendorid", JSON.stringify(vendorid));
      localStorage.setItem("vendordomain", JSON.stringify(vendordomain));
      history.push(`/map/vendor/${vendordomain}`);
    }
    if (vendorError) {
      console.log(vendorError);
    }
  }, [history, vendorError, vendorid]);

  return (
    <MakeVendorForm
      onChangeImage={onChangeImage}
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      name={vendorname}
      domain={vendordomain}
      info={vendorinfo}
      lat={vendorlat}
      lng={vendorlng}
    />
  );
};

export default withRouter(MakeVendorFormContainer);
