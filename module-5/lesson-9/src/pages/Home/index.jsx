import React, { useReducer } from "react";
import "./style.scss";
import { v4 as uuidv4 } from "uuid";

const index = () => {
  const initialState = {
    product: [{ id: 1, title: "lorem Ipsum", num: 12 }],
    title: "",
    num: 0,
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "TITLE":
        return {
          ...state,
          title: action.payload,
        };
      case "NUMBER":
        return {
          ...state,
          num: action.payload,
        };
      case "ADD":
        return {
          ...state,
          product: [...state.product, action.payload],
        };
      case "CLEAR":
        return {
          ...state,
          title: "",
          num: "",
        };

      case "REMOVE":
        return {
          ...state,
          product: [...action.payload],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Home page rendered");
  console.log(state);

  const addProduct = () => {
    const newProduct = {
      id: uuidv4(),
      title: state.title,
      num: state.num,
    };

    if (state.title.trim().length === 0 || state.num.trim().length === 0) {
      alert("Please enter a product title and num");
    } else {
      dispatch({ type: "ADD", payload: newProduct });
      dispatch({ type: "CLEAR" });
    }
  };

  const removeProduct = (id) => {
    const filterpro = state.product.filter((el) => {
      return el.id !== id;
    });

    dispatch({ type: "REMOVE", payload: filterpro });
  };

  return (
    <div className="p-4 mx-auto w-75 shadow mt-5 bg-light">
      <form action="#">
        <input
          type="text"
          className="form-control p-3 w-75 mx-auto my-3"
          placeholder="Enter title"
          value={state.title}
          onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        />
        <input
          type="number"
          className="form-control p-3 w-75 mx-auto my-3"
          placeholder="Enter number"
          value={state.num}
          onChange={(e) =>
            dispatch({ type: "NUMBER", payload: e.target.value })
          }
        />
        <button
          className="btn btn-primary mx-auto w-75 d-block"
          onClick={() => addProduct()}
        >
          ADD PRODUCT
        </button>
      </form>

      <ul className="list-group w-75 mx-auto mt-5">
        {state.product.length > 0 ? (
          state.product.map((el) => {
            return (
              <li
                key={el.id}
                className={"list-group-item d-flex justify-content-between"}
              >
                {el.title}{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => removeProduct(el.id)}
                >
                  remove
                </button>
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

export default React.memo(index);
