import React from "react";
import "./main.css";
const Main = () => {
  return (
    <section className="main">
      <div className="main-ttl">
        <h1>Unlimited movies, TV shows and more.</h1>
        <br />
        <h3>Watch anywhere. Cancel anytime.</h3> <br />
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>
      <br />
      <form>
        <input className="frm" type="text" />
        <button className="frbtn">GETSTARTED</button>
      </form>
    </section>
  );
};

export default Main;
