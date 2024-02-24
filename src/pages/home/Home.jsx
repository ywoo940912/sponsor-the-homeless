import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Datatable from "../../components/datatable/Datatable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Welcome to Revive!</div>
          <div >Where your help becomes someone's second chance</div>
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Home;
