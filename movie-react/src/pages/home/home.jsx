import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import axios from "axios";
import ApiList from "../../components/apiList/ApiList";
import ApiListItem from "../../components/apiListItem/ApiListItem";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <ApiList />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
