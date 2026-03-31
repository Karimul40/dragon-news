import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-none">
      <div className="flex items-center justify-between bg-base-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://via.placeholder.com/40"}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h4 className="text-sm font-semibold text-primary">{author?.name}</h4>
            <p className="text-xs text-accent">{author?.published_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-accent">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-primary leading-7 mb-4">{title}</h2>

        <img
          src={image_url || "https://via.placeholder.com/600x250"}
          alt={title}
          className="w-full h-[220px] object-cover mb-4"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x250";
          }}
        />

        <p className="text-sm text-accent leading-7">
          {details?.slice(0, 180)}...
          <Link to={`/news/${_id}`} className="text-secondary font-semibold ml-1">
            Read More
          </Link>
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t border-base-300">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-sm text-accent ml-2">{rating?.number}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-accent">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;