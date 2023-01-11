import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import GridContent from "../components/common/GridContent";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Thumbnail from "../components/common/Thumbnail";
import ImgSearchicon from "../assets/img/search.svg";
import { getPlaces } from "../reducks/places/selectors";
import { getCategories } from "../reducks/categories/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../reducks/categories/operations";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import MainImg from "../assets/img/main-banner.png";
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
      <Header />
      <main>
        <section class="main-image">
          <img src={MainImg} alt="main-banner" />
        </section>
        <section class="heading">
          <p>Popular Places</p>
        </section>
        <section class="popular-places">
          {categories.map((category) => (
            <GridContent key={category.id} category={category} />
          ))}
        </section>
        <section className="attractions">
          <div class="heading">
            <p>Tourist Attractions</p>
          </div>
          <div class="grid-container">
            <div class="grid-items">
              {places.map((place) => (
                <Thumbnail place={place} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
