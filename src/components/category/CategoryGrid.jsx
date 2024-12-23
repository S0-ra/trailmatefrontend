import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryGrid = function () {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/category")
      .then((response) => {
        console.log(response.data.map((category) => category.name));
        const categoryNames = response.data.map((category) => category.name);
        setCategories(categoryNames);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {categories.map((categoryName, index) => {
        return <CategoryCard title={categoryName} key={index} />;
      })}
    </div>
  );
};

export default CategoryGrid;
