import client from "./client";
import qs from "qs";

export const writeReview = ({ title, body }) => {
  console.log(`writeAPI title : ${title}, body : ${body}`);
  return client.post("/review/register", { title, body }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readReview = (id) => client.get(`/review/${id}`);

export const reviewList = ({ page, writer,}) => {
  const queryString = qs.stringify({
    page,
    writer,
  });
  return client.get(`/review/list`);
  //return client.get(`/review/list?${queryString}`);
};

export const updateReview = ({ id, title, body, tags }) =>
  client.post("/review/register", { id, title, body, tags });

export const deleteReview = (id) => client.delete(`review/${id}`);
