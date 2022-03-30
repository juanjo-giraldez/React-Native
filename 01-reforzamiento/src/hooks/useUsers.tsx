import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqRespList, user } from "../interfaces/repResp.interface";

export const useUsers = () => {
  const [usuarios, setUsuarios] = useState<user[]>([]);
  const pageRef = useRef(1);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await reqResApi.get<ReqRespList>("/users", {
      params: { page: pageRef.current },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
        pageRef.current--;
      alert("no more users");
    }
  };
  const nextPage = () => {
    pageRef.current++;
    loadUsers();
  };

  const previusPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };
  return {
    usuarios,
    nextPage, 
    previusPage
  };
};
