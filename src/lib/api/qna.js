import client from "./client";
import qs from "qs";

export const writeQna = ({ title, body }) => {
  console.log(`writeAPI title : ${title}, body : ${body}`);
  return client.post("/qna/register", { title, body }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readQna = (id) => client.get(`/qna/${id}`);

export const qnalist = ({ page, writer,}) => {
  const queryString = qs.stringify({
    page,
    writer,
  });
  return client.get(`/qna/list`);
  //return client.get(`/qna/list?${queryString}`);
};

export const updateQna = ({ id, title, body, tags }) =>
  client.post("/qna/register", { id, title, body, tags });

export const deleteQna = (id) => client.delete(`qna/${id}`);
