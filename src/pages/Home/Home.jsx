import { useLoaderData } from "react-router-dom";
import Hadder from "../Shared/Hadder/Hadder";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreackingNews from "./BreackingNews";
import NewsCard from "./NewsCard";
import { useState } from "react";

const Home = () => {
  const news = useLoaderData();
  console.log(news)
  const [visibleCount, setVisibleCount] = useState(5);
  const showMoreNews = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };
  return (
    <div>
      <Hadder></Hadder>
      <BreackingNews></BreackingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl">Lastes news comming soon</h2>
          {
            news.slice(0, visibleCount).map((aNews) =>(
              <NewsCard key={aNews._id} news={aNews}></NewsCard>
            ) )
          }

          {
            visibleCount < news.length && (
              <button onClick={showMoreNews} className="btn mb-4">
                show more
              </button>
            )
          }

        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;