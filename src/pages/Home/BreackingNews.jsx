import Marquee from "react-fast-marquee";


const BreackingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breakin news</button>
      <Marquee direction="right" pauseOnHover={true}>
        <p className="mr-12">I can be a React component, multiple React components, or just some text.</p>
        <p>I can be a React component, multiple React components.</p>
      </Marquee>
    </div>
  );
};

export default BreackingNews;