import HeaderCommon from "../components/common/HeaderCommon";
import NewsletterBar from "../components/common/NewsletterBar";
import Footer from "./../components/common/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import  axios  from "axios";
import { useEffect } from "react";
import ProductDescription from "../components/product/ProductDescription";

const SingleProductPage = function () {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images,setImages]=useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/equipment/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/equipment/${id}/images`)
      .then((response) => setImages(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  return (
    <>
      <HeaderCommon />
      <ProductDescription product={product} images={images}/>
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default SingleProductPage;
