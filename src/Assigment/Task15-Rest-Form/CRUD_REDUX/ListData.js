import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listdata } from "../redux/action/data";
import "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListData = () => {
  const { listData, listDataLoading, listDataError } = useSelector(
    (state) => state.data
  );
  console.log(listData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listdata());
  }, [dispatch]);
  return (
    <div>
      <h1>List Data</h1>
      <Button onClick={() => navigate("/add")}>Add Data</Button>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Education</th>
            <th>Profesi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listData ? (
            listData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td>{data.education}</td>
                  <td>{data.profesi}</td>
                  <td>
                    <Button onClick={() => navigate(`/detail/${data.id}`)}>
                      Detail
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : listDataLoading ? (
            <p>Loading...</p>
          ) : (
            <p>{listDataError ? listDataError : "Data Kosong"}</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListData;
