import React from 'react';
import "./index.scss";

const index = () => {
   return (
      <>
       <section class="">
  {/* <!-- Footer --> */}
  <footer class="text-center text-white bg-dark" >
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: CTA --> */}
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* <!-- Section: CTA --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © {new Date().getFullYear()}Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  {/* <!-- Footer --> */}
</section>  
      </>
   );
};

export default index;