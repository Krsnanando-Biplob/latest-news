import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className="">
      <div className="space-y-6">
        <h2 className="text-3x font-bold ">All Categories</h2>
        {
          categories.map(category => <NavLink
            className="block ml-4 hover:underline  font-semibold text-xl"
            to={`/category/${category.id}`}
            key={category.id}>
            {category.name}
          </NavLink>)
        }
      </div>
      <div>

      </div>
    </div>
  );
};

export default LeftNav;