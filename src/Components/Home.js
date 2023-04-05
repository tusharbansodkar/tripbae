import React from "react";
import "../Styles/home.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const customStyles = {
      content: {
        width: "70vw",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "50px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.25)",
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    };

    return (
      <div>
        <header className="head">
          <div>
            <span className="info">
              <a href={"tel:987653210"}>+91 9876543210 </a>
              {/*href="tel:987653210" target="_blank" style="color:black" href="hello@tripbae.com" target="_blank" style="color:black"*/}
              <span> &nbsp;&nbsp;&nbsp;|</span>
              <a href={"hello@tripbae.com"}>hello@tripbae.com</a>
            </span>
            <span className="main">TRIPBAE</span>
            <span className="social">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-linkedin"></i>
            </span>
          </div>
          <br></br>
          <div className="bottom">
            <span className="Modal">Modal</span>
            <span className="Modal">BANGALORE</span>
            <span className="Modal">HIMALAYAN TREKS</span>
            <span className="Modal">CONTACT US</span>
            <span className="Modal">MORE</span>
            <span className="Modal">CART</span>
            <span className="login">
              <span className="log">LOGIN</span>
              <span className="log">SIGNUP</span>
            </span>
          </div>
        </header>
        <div id="content" className="content">
          <br></br>
          <h1 className="banner_title">Gokarna Beach</h1>
          <div className="left">
            <h2 className="st-heading">Gokarna Beach Trek</h2>
            <br></br>
            <div className="sub-heading">
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <span> Gokarna,Karnataka,India</span>
            </div>
            <br></br>
            <div className="right"></div>
          </div>
          <img
            src="./Assets/gokarna.png"
            alt="some error"
            width="95%"
            height="350px"
            margin-left="100px"
          />
          <br></br>
        </div>
        <div className="post-content">
          <br></br>
          <table>
            <h2>Overview</h2>
            <br></br>
            <p dir="ltr">
              {" "}
              Tripbae, we offer customized Gokarna Beach trek packages that
              cater to your needs and preferences. Our team of experts will help
              you plan every aspect of your trip, from transportation to
              accommodation and activities. So, why wait? Plan your trip to
              Gokarna Beach trek from Bangalore with Tripbae today!
            </p>

            <p dir="ltr">
              Whether you want to take a scenic drive or go on a trek, Gokarna
              Beach offers a variety of experiences for travelers. The main
              beach and Kudle beach are located near the town center and offer a
              relaxing environment, while the Om Beach, Half Moon Beach, Full
              Moon Beach, and Belekan Beach are further away and can only be
              reached by boat or trekking.
            </p>

            <p dir="ltr">
              Visitors to Gokarna will also have the opportunity to learn about
              the rich culture and folklore behind the main temple of Shiva with
              the Atmalinga. The town is considered one of the major seven
              pilgrimage centers for Hindus, but it attracts people of all
              religions who are interested in learning about the history and
              culture of the area.
            </p>

            <p dir="ltr">
              Whether you’re a seasoned adventurer or a first-time traveler,
              Gokarna Beach Trek is the perfect destination for a trek and
              camping adventure. With its stunning scenery, pristine beaches,
              and serene environment, you’re sure to have a memorable
              experience.
            </p>

            <p dir="ltr">
              Make the most of your trip to Gokarna by choosing Tripbae as your
              travel partner. Our team of experts will help you plan every
              detail of your journey, from transportation to accommodations and
              activities. So, what are you waiting for? Plan your trip to
              Gokarna Beach today!
            </p>
          </table>
        </div>
        <br></br>
        <div className="st-highlight">
          <h2 className="highlight">Highlights</h2>
          <br></br>
          <ul>
            <li>
              Scenic Drives: Enjoy the scenic drives through the lush green
              forests, hilly terrain, and picturesque landscapes on your way to
              Gokarna.
            </li>
            <li>
              Beaches: Gokarna Beach trek is all about exploring the stunning
              beaches, each with its unique beauty and charm. Visit Kudle Beach,
              Om Beach, Half Moon Beach, Full Moon Beach, and Belekan Beach to
              soak up the sun, surf the waves, and relax in the peaceful
              environment
            </li>
            <li>
              Trekking: The Gokarna Beach trek is a moderate level trek that
              takes you through the rugged terrains and lush forests of the
              Western Ghats. The trek offers breathtaking views of the Arabian
              sea and the Western Ghats, making it an unforgettable experience.
            </li>
            <li>
              Culture: Gokarna is a vintage temple town that is considered one
              of the major seven pilgrimage centers for Hindus. Explore the rich
              culture and folklore behind the main temple of Shiva with the
              Atmalinga, and learn about the history and heritage of the town.
            </li>
          </ul>
        </div>
        <br></br>
        <div className="section-header">
          <h3 className="header">Itinary</h3>
        </div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col" height="2500px">
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="sri">Day 0 - Friday</h4>
                    <span>
                      <img
                        src="./Assets/dayo.jpg"
                        alt="some error"
                        width="30%"
                        height="230px"
                        margin-left="20px"
                        id="dayo"
                      />
                    </span>
                    <span className="day0">
                      <p>
                        <b>
                          Leave the Bangalore in Tempo Traveler,minibus with
                          push-back seats
                        </b>
                        <br></br>
                        Note - (No Dinner stop)
                        <br></br>
                        07:00 PM - Silk Board
                        <br></br>
                        07:20 PM - Koramangala
                        <br></br>
                        07:30 PM - Domlur
                        <br></br>
                        07:45 PM - MG Road
                        <br></br>
                        08:30 PM - KTM Mekhri Circle
                        <br></br>
                        08:45 PM - Yeshwanthpura
                        <br></br>
                        09:00 PM - Goraguntepalya
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="jay">Day 1 - Saturday</h4>
                    <span>
                      <img
                        src="./Assets/day1.jpg"
                        alt="some error"
                        width="30%"
                        height="360px"
                        margin-left="20px"
                        id="day1"
                      />
                    </span>
                    <span className="day1">
                      <p>
                        <br></br>
                        08:00 AM - Reach Modal Stay and freshen up
                        <br></br>
                        09:00 AM - Have to breakfast and carry packed lunch
                        <br></br>
                        09:30 AM - Board the vehicle to Paradise beach
                        <br></br>
                        10:00 AM - Start Gokarna trek from paradise beach
                        <br></br>
                        10:30 AM - From paradise beach, we will trek to the
                        coast to Half-Moon Beach
                        <br></br>
                        11:30 AM - Reach Half-Moon beach. enjoy the stunning
                        views of the sea
                        <br></br>
                        12:00 PM - From Half-Moon beach, we will trek to Om
                        Beach
                        <br></br>
                        01:30 PM - Reach Om Beach. Enjoy the serene beauty
                        <br></br>
                        02:00 PM - Have the packed lunch en-route and recharge
                        yourself
                        <br></br>
                        02:30 PM - From Om Beach, we will trek in a small forest
                        to Kudle Beach
                        <br></br>
                        04:30 PM - Reach Kudle Beach. Enjoy the perfect sunset
                        point
                        <br></br>
                        06:30 PM - From Kudle Beach., we will trek to the
                        Gokarna Beach
                        <br></br>
                        07:00 PM - Reach Gokarna Beach
                        <br></br>
                        07:30 PM - Reach Modal Stay and sip a tea
                        <br></br>
                        09:00 PM - Enjoy campfire followed by dinner
                        <br></br>
                        10:00 PM - After dinner retire for the night
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="san">Day 2 - Sunday</h4>
                    <img src="./Assets/day2.jpg" alt="some error" id="day2" />
                    <span className="day2">
                      <p>
                        <br></br>
                        06:00 AM - Wake up Call & get ready and explore Gokarna
                        Beach
                        <br></br>
                        07:30 AM - Have breakfast
                        <br></br>
                        09:00 AM - Board the vehicle to Vibhooti Falls
                        <br></br>
                        10:15 AM - Reach the Vibhooti Falls & enjoy the serene
                        beauty
                        <br></br>
                        11:00 AM - After Sightseeing board the vehicle to Mirjan
                        Fort
                        <br></br>
                        12:00 PM - Reach the Mirjan Fort & enjoy the serene
                        beauty
                        <br></br>
                        01:00 PM - After Sightseeing board the vehicle
                        <br></br>
                        02:00 PM - Self-sponsored* lunchtime on the way
                        <br></br>
                        04:00 PM - Reach the Hanging Bridge Samshi & enjoy the
                        serene beauty
                        <br></br>
                        05:00 PM - After Sightseeing board a vehicle to return
                        to Bangalore
                        <br></br>
                        08:30 PM - Self-sponsored* dinner time on the way to
                        Bangalore.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="cha">Day 3 - Monday</h4>
                    <span className="day3">
                      <p>
                        <br></br>
                        05:00 AM - Reach Bangalore and drop points are the same
                        as pick points
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="ran">Pick Up Points: ( From Bengaluru )</h4>
                    <p>
                      <br></br>
                      07:00 PM - Silk Board
                      <br></br>
                      07:20 PM - Koramangala
                      <br></br>
                      07:30 PM - Domlur
                      <br></br>
                      07:45 PM - MG Road
                      <br></br>
                      08:30 PM - KTM Mekhri Circle
                      <br></br>
                      08:45 PM - Yeshwanthpura
                      <br></br>
                      09:00 PM - Goraguntepalya
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="container">
                <div className="item">
                  <div className="matter">
                    <h4 className="mah">Things To Carry</h4>
                    <p>
                      <br></br>
                      -Face Masks and Hand Sanitizers
                      <br></br>
                      -Xerox Copy of your Aadhar/Voter ID (Mandatorily required
                      for permits)
                      <br></br>
                      -Small backpack to carry your essentials during the trek
                      <br></br>
                      -Water bottles 1-2 (1 liter each)
                      <br></br>
                      -Lunch Box & Spoon to carry your packed lunch
                      <br></br>
                      -Raincoat (poncho)/Bag covers in case of rains
                      <br></br>
                      -A comfortable pair of shoes with good grip for trekking
                      with extra pair of socks
                      <br></br>
                      -Flip-flops for lazing around the campsite
                      <br></br>
                      -Torch/Headlamp to be used at night
                      <br></br>
                      -Portable chargers for your electronics
                      <br></br>
                      -Extra pair of clothes to change into once wet
                      <br></br>
                      -Polybags to pack your wet clothes
                      <br></br>
                      -Eatables during trek Energy Booster, Tissues, Chocolates,
                      Dry fruits, etc
                      <br></br>
                      -Personal Medication
                      <br></br>
                      -Snacks for yoursel
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
            <div className="col book">
              <h2>Booking Form</h2>
              <form onSubmit={this.handleSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name"></input>
                <br></br>
                <br></br>
                <label for="sex">Sex:</label>
                <input type="radio" name="sex" id="male" value="male"></input>
                <label for="male">Male</label>
                <input
                  type="radio"
                  name="sex"
                  id="female"
                  value="female"
                ></input>
                <label for="female">Female</label> <br></br>
                <br></br>
                <label for="country">Country: </label>
                <select name="country" id="country">
                  <option>Select an option</option>
                  <option value="nepal">Nepal</option>
                  <option value="usa">USA</option>
                  <option value="australia">Australia</option>
                </select>
                <br></br>
                <br></br>
                <label for="message">Message:</label>
                <br></br>
                <br></br>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                ></textarea>
                <br></br>
                <br></br>
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                ></input>
                <label for="newsletter">Subscribe?</label>
                <br></br>
                <br></br>
                <button className="btn-order model-btn" type="submit">
                  Open Modal
                </button>
                <Modal
                  isOpen={this.state.showModal}
                  onRequestClose={this.handleCloseModal}
                  contentLabel="Example Modal"
                  style={customStyles}
                >
                  <h2>Select Package Options</h2>
                  <div
                    style={{
                      border: "1px solid gray",
                      padding: "10px",
                      margin: "25px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                      lineHeight: 2,
                    }}
                  >
                    <div>
                      <h3>Trip to Gokarna Beach without Transportation</h3>
                      <i className="bi bi-clock"></i>
                      <span>3 days, 2 nights</span>
                      <h5 style={{ color: "red" }}>Show Details</h5>
                    </div>

                    <div>
                      <h6>
                        <s style={{ color: "gray" }}>INR 4,599</s>
                      </h6>
                      <h3 style={{ color: "red" }}>INR 2,625</h3>
                      <h6 style={{ color: "gray" }}>Per Adult</h6>
                    </div>
                  </div>

                  <div
                    style={{
                      border: "1px solid gray",
                      padding: "10px",
                      margin: "25px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                      lineHeight: 2,
                    }}
                  >
                    <div>
                      <h3>Trip to Gokarna Beach with Transportation</h3>
                      <i className="bi bi-clock"></i>
                      <span>3 days, 2 nights</span>
                      <h5 style={{ color: "red" }}>Show Details</h5>
                    </div>

                    <div>
                      <h6>
                        <s style={{ color: "gray" }}>INR 4,599</s>
                      </h6>
                      <h3 style={{ color: "red" }}>INR 1,750</h3>
                      <h6 style={{ color: "gray" }}>Per Adult</h6>
                    </div>
                  </div>
                  <button
                    onClick={this.handleCloseModal}
                    className="btn-order model-btn"
                  >
                    Close Modal
                  </button>
                </Modal>
              </form>
            </div>
          </div>
          <div className="st-included">
            <h2 className="esh">Included/Excluded</h2>
            <span>
              <ul>
                <li>To and fro transport from Bangalore (Non A/c)</li>
                <li>All food served will be veg only</li>
                <li>Rooms, Camping, Campfire</li>
                <li>Trek Leads from the tripbae Team</li>
                <li>Forest/trek Guide</li>
                <li> Forest/trek Permits</li>
                <li>First aid kit.</li>
              </ul>
            </span>
            <span>
              <ul>
                <li>Any kind of insurance</li>
                <li> Personal Expenses (snacks, mineral water, etc)</li>
                <li> Anything not included above</li>
              </ul>
            </span>
          </div>
          <br></br>
          <div className="st-flex space-between">
            <span>
              <h3 className="location">Tour's Location</h3>
              <div className="c-grey">
                <span>
                  <i className="input-icon bi bi-geo-alt-fill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 24 24"
                    ></svg>
                  </i>
                </span>
                Gokarna,Karnataka,India
              </div>
            </span>
          </div>
          <br></br>
          <h2 className="st-heading-section">Reviews</h2>
          <div id="reviews" data-sectin="st-reviews">
            <div className="review-box">
              <div className="row">
                <div className="col-lg-5">
                  <div className="review-score">
                    "4"
                    <span className="per-total">/5</span>
                  </div>
                  <div className="review-score-stars">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="review-scor-base">
                  " Based on "<span>1 Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
