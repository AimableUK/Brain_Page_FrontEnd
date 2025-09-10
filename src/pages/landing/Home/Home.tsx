// import React from 'react'
import gradientImg from "../../../assets/gradient.png";
import SpotlightCards from "./snippets/SpotlightCard";

const Home = () => {
  return (
    <div>
      <img
        className="image-gradient"
        src={gradientImg}
        alt="landing gradient"
      />
      <div className="layer-blur"></div>
      <section className="mx-10">
        {/* top */}
        <div className="mt-32 flex flex-col items-center text-center gap-y-8">
          <div>
            <h5 className="font-bold text-5xl">
              Organize. Track. Grow Your Library.
            </h5>
            <p className="text-lg">
              Transform the Way You Manage Your Library with a Powerful,
              <br />
              Intuitive, and Fully Digital System That Keeps Everything
              Organized and Accessible.
            </p>
          </div>
          <div className="flex flex-row gap-x-5">
            <button className="p-1 px-3 rounded-md border border-cardBorder">Learn More</button>
            <button>Start Browsing</button>
          </div>
          <div className="flex flex-col md:flex-row justify-around text-center gap-3 w-full md:w-fit">
            <SpotlightCards number="1,500+" label="Satisfied Librarians" />
            <SpotlightCards number="50,000+" label="Books Managed" />
            <SpotlightCards number="3+" label="Years of Experience" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
