import axios from "axios";
import { useEffect,useState } from "react";
import ProductCard from "./ProductCard";

export const ProductList = function () {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/equipment")
      .then((response) => {
        console.log(response.data.map((category) => category.name));
        setEquipment(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <h2 className="font-bold text-lg mb-4" style="font-family: montserrat">
          Product List
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => {
            <ProductCard
              id={item.equipmentid}
              name={item.name}
              price={equipment.price}
              rating={equipment.rating}
              availability={equipment.rating}
            />;
          })}
        </div>
      </div>
    </>
  );
};
