import React, { useEffect, useState } from "react";
import { URL } from "../../api/Api";
import { useNavigate } from "react-router-dom";
const index = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authorization = (e) => {
    e.preventDefault();

    const params = {
      username: userName,
      password: password,
    };

    const check = {
      input1: params.username.trim().length === 0,
      input2: params.password.trim().length === 0,
    };

    if (check.input1 || check.input2) {
      alert("Please fill username and password");
    } else {
      URL.login(params)
        .then((result) => {
          console.log(result.data.data);
          localStorage.setItem("token", result.data.data.token);
          localStorage.setItem("user", result.data.data.username);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="card p-5 mx-auto w-50 mt-5 shadow">
      <h1 className="text-center">login</h1>

      <form action="#" onSubmit={(e) => authorization(e)}>
        <label htmlFor="username" className="w-100">
          <input
            type="text"
            id="username"
            className="p-3 form-control mb-3 "
            placeholder="enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="w-100">
          <input
            type="password"
            id="password"
            className="p-3 form-control mb-3"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="btn btn-primary w-100 p-3" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default index;
