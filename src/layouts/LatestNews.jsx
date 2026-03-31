import { useEffect, useState } from "react";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const latestText = news
    .slice(0, 3)
    .map((item) => item.title)
    .join("   •   ");

  return (
    <div className="latest-news">
      <button className="latest-btn">Latest</button>
      <marquee behavior="scroll" direction="left">
        {latestText || "Loading latest news..."}
      </marquee>
    </div>
  );
};

export default LatestNews;