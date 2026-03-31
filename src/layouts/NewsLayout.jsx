import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

import demoUser from "../assets/demo-user.png";
import demoCardThumbnail from "../assets/demo-card-thumbnail.png";
import star from "../assets/star.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";
import bg from "../assets/bg.png";
import sport1 from "../assets/sport 1.png";
import sport2 from "../assets/sport2.png";
import sport3 from "../assets/sport3.png";


const LeftSidebar = ({ categories, activeId, sideNews }) => {
    const images =[sport1, sport2, sport3];
  return (
    <aside className="left-sidebar">
      <h3 className="sidebar-title">All Category</h3>

      <div className="category-list">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.id === "09" ? "/" : `/category/${category.id}`}
            className={`category-link ${
              activeId === category.id ? "active-category" : ""
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="sidebar-news-list">
        {sideNews.map((item, index) => (
          <div key={item.id} className="sidebar-news-card">
            <img
            src={images[index % images.length]}
            alt={item.tittle}
            className="sidebar-news-image"
            />
            <h4>{item.title}</h4>
            <div className="sidebar-news-meta">
              <span>sports</span>
              <span>{item.author.published_date}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

const RightSidebar = () => {
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

      <div className="right-bg-card">
        <img src={bg} alt="background" />
      </div>
    </aside>
  );
};

const NewsCard = ({ item }) => {
  return (
    <article className="news-card compact-news-card">
      <div className="news-card-header">
        <div className="news-author">
          <img src={demoUser} alt={item.author.name} />
          <div>
            <h5>{item.author.name}</h5>
            <p>{item.author.published_date}</p>
          </div>
        </div>

        <div className="news-actions">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className="news-card-body compact-news-body">
        <h2 className="news-card-title compact-title">{item.title}</h2>

        <img
          src={demoCardThumbnail}
          alt={item.title}
          className="news-main-image compact-main-image"
        />

        <p className="news-description compact-description">
          {item.details.length > 140
            ? `${item.details.slice(0, 140)}...`
            : item.details}
          <Link to={`/news/${item.id}`} className="read-more-link">
            {" "}
            Read More
          </Link>
        </p>
      </div>

      <div className="news-card-footer compact-footer">
        <div className="rating-block">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <span>{item.rating.number}</span>
        </div>

        <div className="view-block">
          <FaEye />
          <span>{item.total_view}</span>
        </div>
      </div>
    </article>
  );
};

const ThirdCompactCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="third-compact-card">
      <div className="third-compact-top">
        <div className="news-author">
          <img src={demoUser} alt={item.author.name} />
          <div>
            <h5>{item.author.name}</h5>
            <p>{item.author.published_date}</p>
          </div>
        </div>
      </div>

      <h4 className="third-compact-title">{item.title}</h4>

      <p className="third-compact-text">
        {item.details.slice(0, 95)}...
      </p>

      <Link to={`/news/${item.id}`} className="third-compact-btn">
        Read More
      </Link>
    </div>
  );
};

const NewsLayout = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const filteredNews = useMemo(() => {
    if (!id || id === "09") return allNews;
    return allNews.filter((item) => item.category_id === id);
  }, [allNews, id]);

  const firstTwoNews = filteredNews.slice(0, 2);
  const thirdNews = filteredNews[2];
  const sideNews = allNews.slice(1, 4);

  return (
    <section className="news-layout">
      <LeftSidebar categories={categories} activeId={id} sideNews={sideNews} />

      <main className="middle-content balanced-middle-content">
        <h3 className="middle-title">Dragon News Home</h3>

        <div className="middle-cards-wrap">
          {firstTwoNews.length > 0 ? (
            firstTwoNews.map((item) => <NewsCard key={item.id} item={item} />)
          ) : (
            <div className="no-news-found">No news found in this category.</div>
          )}
        </div>

        <ThirdCompactCard item={thirdNews} />
      </main>

      <RightSidebar />
    </section>
  );
};

export default NewsLayout;