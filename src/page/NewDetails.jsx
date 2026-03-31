import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";
import demoCardThumbnail from "../assets/demo-card-thumbnail.png";

const DetailsRightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <h3 className="sidebar-title">Login With</h3>

      <button className="login-social-btn google-btn">Login with Google</button>
      <button className="login-social-btn github-btn">Login with Github</button>

      <h3 className="sidebar-title right-gap">Find Us On</h3>

      <div className="find-us-box">
        <div className="find-us-item">
          <img src={fb} alt="facebook" />
          <span>Facebook</span>
        </div>
        <div className="find-us-item">
          <img src={twitter} alt="twitter" />
          <span>Twitter</span>
        </div>
        <div className="find-us-item">
          <img src={instagram} alt="instagram" />
          <span>Instagram</span>
        </div>
      </div>

      <div className="qzone-wrapper">
        <h3 className="sidebar-title">Q-Zone</h3>
        <div className="qzone-box">
          <img src={swimming} alt="swimming" />
          <img src={classImg} alt="class" />
          <img src={playground} alt="playground" />
        </div>
      </div>
    </aside>
  );
};

const NewDetails = () => {
  const { id } = useParams();
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const news = allNews.find((item) => item.id === id);

  if (!news) {
    return <p className="loading-state">Loading news details...</p>;
  }

  return (
    <section className="details-layout">
      <div className="details-content">
        <h3 className="middle-title">Dragon News</h3>

        <div className="details-card">
          <img
            src={demoCardThumbnail}
            alt={news.title}
            className="details-main-image"
          />

          <h2 className="details-title">{news.title}</h2>
          <p className="details-text">{news.details}</p>

          <Link
            to={news.category_id === "09" ? "/" : `/category/${news.category_id}`}
            className="back-category-btn"
          >
            ← All news in this category
          </Link>
        </div>
      </div>

      <DetailsRightSidebar />
    </section>
  );
};

export default NewDetails;