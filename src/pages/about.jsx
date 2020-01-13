import React from "react";
import Layout from "../layout";
import papan01 from "../../static/profile-pic.jpg";
import SEO from "../components/SEO";
import "./about.scss";

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={papan01} className="user-avatar" alt="papan01" />
        <section className="about-context">
          <div>
            <h3>elaidina</h3>
            <p className="time">2020-12-11</p>
            <p>
              stay at home mum and web developer:
              <a href="https://github.com/elaidina">visit my github page </a>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
