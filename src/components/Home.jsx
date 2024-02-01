import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>Techstar</h1>
          <p>solution to all your tech problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptate cumque quos, ex tempora necessitatibus voluptatem non
            voluptatum voluptatibus quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quia, ullam repellat earum iste rerum quidem, consequuntur odit quisquam exercitationem quod nisi harum distinctio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio quos iste, natus cumque libero 
            corrupti qui beatae atque labore nisi voluptates illo maxime expedita voluptatibus laudantium eum numquam 
            voluptatum! Voluptatibus itaque voluptate iure dolorem velit doloribus totam alias odit sit est at molestias 
            laboriosam nostrum, ad autem ab cumque eum suscipit accusantium vel ea molestiae?

          </p>
        </div>
      </div>

      <div className="home4" id= "brands">
        <div>

          <h1>Brands</h1>

          <article>

            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
            <div style={{animationDelay: "1s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
          </article>

        </div>
      </div>
    </>
  );
};

export default Home;
