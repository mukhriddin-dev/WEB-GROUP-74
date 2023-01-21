import React, { useReducer, useEffect } from "react";
import "./style.scss";
const index = () => {
  const initialState = {
    post: [],
    load: false,
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        dispatch({ type: "DATA", payload: res });
        dispatch({ type: "LOAD" });
      });
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          post: [...action.payload],
        };
      case "LOAD":
        return {
          ...state,
          load: true,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  if (!state.load) {
    return <h1>LOADING . . .</h1>;
  }

  return (
    <div>
      <h1>About</h1>
      <ul className="list-group w-75 mx-auto mt-5">
        {state.post.length > 0 ? (
          state.post.map((el) => {
            return (
              <li
                key={el.id}
                className={"list-group-item d-flex justify-content-between"}
              >
                {el.title}
              </li>
            );
          })
        ) : (
          <h4>"NOT FOUND"</h4>
        )}
      </ul>
    </div>
  );
};

export default index;
