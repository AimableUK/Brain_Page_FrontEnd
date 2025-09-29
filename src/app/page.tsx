import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import LineBreak from "@/components/Home/LineBreak";
import SpotlightCard from "@/components/Home/SpotlightCard";
import WhyUs from "@/components/Home/WhyUs";
import Footer from "@/components/includes/Landing/Footer";
import Header from "@/components/includes/Landing/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <>
        <Image
          className="image-gradient-home z-10"
          src="/gradient.png"
          alt="landing gradient"
          width={500}
          height={500}
        />
        <div className="layer-blur-home"></div>
        {/* top details */}
        <div className="mx-10 my-14 md:mt-32 flex flex-col items-center text-center gap-y-8">
          <div className="flex flex-col gap-y-4">
            <h5 className="font-bold text-4xl md:text-5xl">
              Organize. Track. Grow Your Library.
            </h5>
            <p className="md:text-lg">
              Transform the Way You Manage Your Library with a Powerful,
              <br />
              Intuitive, and Fully Digital System That Keeps Everything
              Organized and Accessible.
            </p>
          </div>
          <div className="flex flex-row gap-x-5">
            <button
              type="button"
              className="rounded-md px-4 py-1 bg-background border border-cardBorder hover:text-textSecondary hover:border-textSecondary primary-transition active:scale-95"
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
      </>
      <Footer />
    </div>
  );
}
