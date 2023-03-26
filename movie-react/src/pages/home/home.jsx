import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import axios from "axios";
import ApiList from "../../components/apiList/ApiList";
import ApiListItem from "../../components/apiListItem/ApiListItem";
import Footer from "../../components/footer/Footer";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/lists${type ? "?type=" + type : ""}${
            genre ? "genre=" + genre : ""
          }`
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  console.log(type);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {type === undefined && <ApiList />}
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
