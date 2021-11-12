import OpenColor from "open-color";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import WriteActionButton from "../common/WriteActionButton";

const MakeVendorFormBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const MakeVendorFormItem = styled(BasicItem)`
  flex: 1;

  &.writeTitle {
    flex: 0 0 3rem;
    width: 80%;
    align-self: center;
  }
  &.writeInfo {
    flex: 0 0 1rem;
  }
  &.writeContent {
    align-self: center;
    flex: 1;
    width: 80%;
    background-color: ${OpenColor.white};
  }
  &.writeButton {
    flex: 0 0 2rem;
  }
  input {
    width: 100%;
  }

  textarea {
    height: 100%;
    resize: none;
    width: 100%;
  }
`;

const MakeVendorForm = ({
  name,
  domain,
  info,
  lng,
  lat,
  onChangeField,
  onChangeImage,
  onPublish,
  onCancel,
}) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: "vendorname", value: e.target.value });
  };
  const onChangeDomain = (e) => {
    onChangeField({ key: "vendordomain", value: e.target.value });
  };
  const onChangeInfo = (e) => {
    onChangeField({ key: "vendorinfo", value: e.target.value });
  };

  const onChangeImageInput = (e) => {
    onChangeImage(e.target.files);
  };

  return (
    <MakeVendorFormBlock>
      <MakeVendorFormItem className="writeName">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChangeTitle}
        />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeDomain">
        <input
          type="text"
          placeholder="도메인"
          value={domain}
          onChange={onChangeDomain}
        />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeFile">
        <input
          type="file"
          accept="image/*"
          name="file"
          multiple
          onChange={onChangeImageInput}
        />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeInfo">
        <textarea value={info} onChange={onChangeInfo} />
      </MakeVendorFormItem>
      <MakeVendorFormItem className="writeButton">
        <WriteActionButton onPublish={onPublish} onCancel={onCancel} />
      </MakeVendorFormItem>
    </MakeVendorFormBlock>
  );
};

export default MakeVendorForm;
