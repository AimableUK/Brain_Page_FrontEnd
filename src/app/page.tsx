import CloudSync from "@/components/Home/CloudSync";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import LandingImg from "@/components/Home/LandingImg";
import LineBreak from "@/components/Home/LineBreak";
import SpotlightCard from "@/components/Home/SpotlightCard";
import WhyUs from "@/components/Home/WhyUs";
import Footer from "@/components/includes/Landing/Footer";
import Header from "@/components/includes/Landing/Header";

export const metadata = {
  title: "Brain Page - Library Management Made Easy",
  description:
    "Brain Page Library Management System to manage books, authors, and borrowers.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <>
        <LandingImg />

        {/* top details */}
        <div className="mx-10 my-14 md:mt-32 flex flex-col items-center text-center gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h5 className="font-bold text-textSecondary text-4xl md:text-5xl">
              Organize. Track. Grow Your Library.
            </h5>
            <p className="md:text-lg text-textSecondary">
              Transform the Way You Manage Your Library with a Powerful library
              Management System
              <br />
              Intuitive, and Fully Digital System That Keeps Everything
              Organized and Accessible.
            </p>
          </div>
          <div className="flex flex-row gap-x-2 md:gap-x-5">
            <button
              type="button"
              className="rounded-md px-2 md:px-4 py-1 bg-background border border-cardBorder hover:text-textSecondary hover:border-textSecondary primary-transition active:scale-95"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-md px-2 md:px-3 py-1 bg-accent text-white border border-gray-600 hover:border-textSecondary primary-transition active:scale-95"
            >
              Get Started
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

        {/* why Us */}
        <CloudSync />

        <LineBreak />

        {/* Features */}
        <Features />

        <LineBreak />

        {/* faq */}
        <FAQ />
      </>
      <Footer />
    </div>
  );
}
