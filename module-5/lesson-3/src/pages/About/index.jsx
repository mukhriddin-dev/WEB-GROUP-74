import React, { useState, useRef } from "react";
import "./style.scss";

const index = () => {
  const [num, setNum] = useState(1);
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>About page {num}</h1>

      <button onClick={() => setNum(num + 1)}>add</button>
      <button className="btn-success" onClick={() => setToggle(true)}>
        OPEN
      </button>
      <button className="btn-danger" onClick={() => setToggle(false)}>
        CLOSE
      </button>
      <button className="btn-warning" onClick={() => setToggle((e) => !e)}>
        TOGGLE
      </button>

      <div className={toggle ? "box " : "box swipe"}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In odit
          molestiae alias officia asperiores libero corrupti impedit eveniet,
          eligendi quibusdam accusantium iure magnam ea odio provident nostrum
          harum voluptatum modi enim ipsam delectus ullam animi dolor! Officia
          excepturi repellendus autem asperiores eius a tempora error nam eum
          minima veniam nemo animi ad velit ratione natus dolore, earum minus
          iusto delectus consectetur laudantium? Tenetur porro explicabo nobis
          placeat earum voluptatem recusandae, saepe quasi quis deserunt?
          Explicabo suscipit vitae fugit repudiandae rem ipsam aliquam veniam
          nesciunt excepturi sequi dolores sit porro ratione, iusto laboriosam
          illum dolorem? Illo facere cupiditate nisi, laboriosam id dicta itaque
          excepturi quas ad nam molestias doloribus expedita ut suscipit eos
          vel, culpa omnis fuga. Sed laboriosam nam expedita.
        </p>
      </div>
    </div>
  );
};

export default index;
