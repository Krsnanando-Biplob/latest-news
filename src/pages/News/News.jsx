
import { useParams } from 'react-router-dom';
import Hadder from './../Shared/Hadder/Hadder';
import RightNav from './../Shared/RightNav/RightNav';
import Navbar from '../Shared/Navbar/Navbar';
import { useEffect, useState } from 'react';
const News = () => {
  const { id } = useParams()
  const [news, setNews] = useState(null)
  useEffect(() => {
    fetch(`/news.json`)
      .then((res) => res.json())
      .then((data) => {
        const foundNews = data.find((item) => item._id === id);
        setNews(foundNews)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  if (!news) return <>
    <div className='flex justify-center items-center h-screen'>
      <p className='text-3xl'>No news found.</p>;
    </div>
  </>

  return (
    <div>
      <Hadder></Hadder>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className=" lg:text-5xl font-bold my-4">News Details</h2>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={news.image_url}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
            </div>
          </div>
        </div>
        <div className="">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default News;