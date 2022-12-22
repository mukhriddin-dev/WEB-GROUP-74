import React from "react";
import "./style.scss";

const index = (props) => {
  const {
    data: { avatar, email, first_name, last_name, status },
  } = props;
  console.log(props);

  const cardStyle = {
    borderRadius: "20px",
    boxShadow: status ? "0 0 15px green" : "0 0 15px red",
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={avatar} alt="rasm" className="card-img" />

      <div className="card-body">
        <h3 className="card-title">
          {first_name} {last_name}
        </h3>
        <p className="card-text">{email}</p>
        <div className="card--btn-wrapper">
          <div
            className={
              status ? "card--btn-wrapper-success" : "card--btn-wrapper-danger"
            }
          >
            {status ? "Online" : "Offline"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
