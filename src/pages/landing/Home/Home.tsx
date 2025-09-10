import gradientImg from "../../../assets/gradient.png";
import FAQ from "./snippets/FAQ";
import Features from "./snippets/Features";
import SpotlightCard from "./snippets/SpotlightCard";
import WhyUs from "./snippets/WhyUs";
import LineBreak from "./snippets/LineBreak";

const Home = () => {
  return (
    <div>
      <img
        className="image-gradient"
        src={gradientImg}
        alt="landing gradient"
      />
      <div className="layer-blur"></div>
      {/* top details */}
      <div className="mx-10 my-14 md:mt-32 flex flex-col items-center text-center gap-y-8">
        <div className="flex flex-col gap-y-4">
          <h5 className="font-bold text-4xl md:text-5xl">
            Organize. Track. Grow Your Library.
          </h5>
          <p className="md:text-lg">
            Transform the Way You Manage Your Library with a Powerful,
            <br />
            Intuitive, and Fully Digital System That Keeps Everything Organized
            and Accessible.
          </p>
        </div>
        <div className="flex flex-row gap-x-5">
          <button
            type="button"
            className="rounded-md px-4 py-1 bg-primary border border-cardBorder hover:text-textSecondary hover:border-textSecondary primary-transition active:scale-95"
          >
            Learn More
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1 bg-accent border border-cardBorder hover:border-textSecondary primary-transition active:scale-95"
          >
            Start Browsing
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around text-center gap-3 w-full md:w-fit">
          <SpotlightCard number="1,500+" label="Satisfied Librarians" />
          <SpotlightCard number="50,000+" label="Books Managed" />
          <SpotlightCard number="3+" label="Years of Experience" />
        </div>
      </div>

      <LineBreak />

      {/* why Us */}
      <WhyUs />

      <LineBreak />

      {/* Features */}
      <Features />

      <LineBreak />

      {/* faq */}
      <FAQ />
    </div>
  );
};

export default Home;
