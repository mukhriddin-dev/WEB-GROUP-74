import React, { memo } from "react";
import "./style.scss";

const index = () =>
{
   console.log("Rendered card component");
   return (
      <div className="card w-25 shadow p-5 mx-auto mt-5">
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, corporis
            sint? Quibusdam eaque quidem tempora libero, est repellendus voluptate
            eligendi nihil, accusantium odit, alias illum similique dicta dolorum!
            Dolor temporibus saepe rerum culpa consectetur. Laboriosam, eligendi.
         </p>
      </div>
   );
};

export default memo(index);
