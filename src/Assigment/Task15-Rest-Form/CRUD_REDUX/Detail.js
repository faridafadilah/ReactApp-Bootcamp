import React, { useEffect } from "react";
import { detail, deleteData } from "../redux/action/data";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { detailData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detail(id));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteData(id));
    navigate("/");
  };

  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="header">
            {detailData.firstName} {detailData.lastName}
          </div>
          <div class="meta">Education :{detailData.education}</div>
          <div class="description">
            Experience:
            <ul>
              {detailData.experience
                ? detailData.experience.map((exp, i) => {
                    return <li>{exp}</li>;
                  })
                : null}
            </ul>
          </div>
          <p>
            {detailData.employed === true ? (
              <p>Sudah Bekerja</p>
            ) : (
              <p>Belum Bekerja</p>
            )}
          </p>
          <p>{detailData.notes}</p>
          <p>{detailData.profesi}</p>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic red button" onClick={handleDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
