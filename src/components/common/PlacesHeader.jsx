import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/footer-logo.svg";
import Dropdown from "../../assets/img/places-dropdown.svg";
import Search from "../common/Search";

const PlacesHeader = () => {
     const dispatch = useDispatch();
  return (
      <>
        <header>
          <div className="places-header">
            <div class="logo">
              <img src={logo} alt="logo" onClick={() => dispatch(push("/"))} />
            </div>
            <div class="right-nav">
              <img
                src={Dropdown}
                alt="dropdown"
                onClick={() => dispatch(push("/favourites"))}
              />
            </div>
          </div>
          <div class="search">
            <Search />
          </div>
        </header>
      </>
  );
}

export default PlacesHeader
