import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterMerchandise from "../../components/merchandise/RegisterMerchandise";
import { changeField, initialize, writeMerchandise } from "../../modules/write";

const RegisterMerchandiseContainer = ({ history, match }) => {
  const dispatch = useDispatch();
  const { vendorid, title, body, price, merchandise, merchandiseError } =
    useSelector(({ write, vendor }) => ({
      vendorid: vendor.vendorid,
      title: write.title,
      body: write.body,
      price: write.price,
      merchandise: write.merchandise,
      merchandiseError: write.merchandiseError,
    }));
  const [images, setImages] = useState();

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onPublish = () => {
    const formData = new FormData();
    formData.append(
      "merchandise",
      new Blob([
        JSON.stringify({
          merchandiseName: title,
          merchandiseDescription: body,
          merchandisePrice: price,
          vendorId: vendorid,
        }),
      ])
    );
    images &&
      Array.from(images).forEach((image) => formData.append("images", image));
    dispatch(writeMerchandise(formData));
  };

  const onCancel = () => {
    history.goBack();
  };

  const onChangeImage = (image) => {
    console.log(image);
    console.log(`위의 것으로 이미지 셋팅 완료!`);
    setImages(image);
  };

  useEffect(() => {
    if (merchandise) {
    }
    if (merchandiseError) {
      console.log(merchandiseError);
    }
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, history, merchandise, merchandiseError]);

  return (
    <RegisterMerchandise
      onPublish={onPublish}
      onCancel={onCancel}
      onChangeField={onChangeField}
      onChangeImage={onChangeImage}
      title={title}
      body={body}
      price={price}
    />
  );
};

export default RegisterMerchandiseContainer;
