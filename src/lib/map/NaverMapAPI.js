import React from "react";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";

const NaverMapAPI = ({ vendorlist, onChangeField, onMarkerClick }) => {
  const onClickMap = (e) => {
    alert(`lat : ${e.coord.lat()} / lng : ${e.coord.lng()}`);
    onChangeField({ key: "vendorlng", value: e.coord.lng() });
    onChangeField({ key: "vendorlat", value: e.coord.lat() });
  };

  const NaverMapBlock = () => {
    const navermaps = window.naver.maps;
    return (
      <NaverMap
        mapDivId={"my-naver-map"}
        style={{
          width: "100%",
          height: "100%",
        }}
        defaultCenter={{ lat: 37.551229, lng: 126.988205 }}
        defaultZoom={15}
        onClick={onClickMap}
      >
        {vendorlist &&
          vendorlist.map((vendor) => (
            <Marker
              key={vendor.id}
              title={vendor.vendorName}
              position={
                new navermaps.LatLng(vendor.vendorLat, vendor.vendorLng)
              }
              animation={0}
              onClick={() => onMarkerClick(vendor.vendorDomain)}
            /> // 이렇게 새로 추가되는 것 같은 경우 이렇게 함수 형태로 해야 바인드가 되는 듯.
          ))}
      </NaverMap>
    );
  };

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"sadsrqdd3x"} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapBlock />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverMapAPI;
