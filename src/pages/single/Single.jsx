import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/35011/people-peoples-homeless-male.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Shane Johnson</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">bmeeks@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Donation Link:</span>
                  <span><a href="https://buy.stripe.com/7sI28tcgc3IK8KY8wx">Shane's Stripe   
                  </a></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vendor Location:</span>
                  <span className="itemValue">
                    1300 church st, Marietta, 30060
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Story:</span>
                  <span className="itemValue">Shane never imagined he would one day find himself sleeping on the streets.

                  He had grown up in a stable family north of Atlanta in Pickens County, was involved in church, and had a steady job for a marble company. But when he became disabled, his life turned upside down.

                  “That was hard, as a man, accepting that you can’t work anymore. Or you can’t do as good as you used to do,” Shane says.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
