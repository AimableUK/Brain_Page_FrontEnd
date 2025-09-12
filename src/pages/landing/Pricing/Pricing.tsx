import { useEffect, useRef, useState } from "react";
import gradientImg from "../../../assets/gradient.png";
import LineBreak from "../Home/snippets/LineBreak";
import { IoBookSharp, IoLibrary } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { ImUsers } from "react-icons/im";

const Pricing = () => {
  const [plan, setPlan] = useState<string>("MON");
  //   STARTER BASIC ELITE GROWTH
  const [monthOffer, setMonthOffer] = useState<string>("GROWTH");
  const [yearOffer, setYearOffer] = useState<string>("BASIC");

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLDivElement>(".card");

      cards.forEach((c) => {
        const rect = c.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // proximity check (inside or within 60px outside)
        const outsideX =
          e.clientX < rect.left - 60 || e.clientX > rect.right + 60;
        const outsideY =
          e.clientY < rect.top - 60 || e.clientY > rect.bottom + 60;

        if (!(outsideX || outsideY)) {
          c.classList.add("active");
          c.style.setProperty("--x", `${x}px`);
          c.style.setProperty("--y", `${y}px`);
        } else {
          c.classList.remove("active");
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handlePlan = (p: string) => {
    if (p === "MON") {
      setPlan("MON");
    } else {
      setPlan("YR");
    }
  };

  return (
    <div>
      <div className="flex self-center justify-center">
        <img
          className="image-gradient-pricing"
          src={gradientImg}
          alt="landing gradient"
        />
        <div className="layer-blur-pricing"></div>
      </div>

      <div className="mx-10 my-14 md:mt-36 flex flex-col items-center text-center gap-y-8">
        <div className="flex flex-col gap-y-4 items-center">
          <h3 className="px-4 py-1 rounded-full border border-cardBorder bg-secondary w-fit">
            Try 14 days for free!
          </h3>
          <h1 className="font-bold text-4xl md:text-6xl">
            Transparent Pricing
          </h1>
          <p className="md:text-lg">
            Brain Page combines enterprise-grade capabilities with
            <br />
            simplicity offering plans tailored to users of all levels.
          </p>
          <div className="flex flex-row gap-3 border border-cardBorder p-1 rounded-full mt-5">
            <button
              type="button"
              onClick={() => handlePlan("MON")}
              className={` ${
                plan === "MON" && "bg-accent"
              } rounded-full px-3 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => handlePlan("YR")}
              className={` ${
                plan === "YR" && "bg-accent"
              } rounded-full pl-3 pr-1 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
            >
              Yearly
              <span className="border border-cardBorder bg-secondary rounded-full p-[3px] ml-4 px-2">
                -20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {plan === "MON" ? (
        <div className="flex flex-col md:flex-row mx-5 gap-3 mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div
              ref={cardRef}
              className={`${
                monthOffer === "BASIC" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {monthOffer === "BASIC" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Basic</h2>
                <h6 className="font-semibold text-gray-300">
                  For small Libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $15
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    monthOffer === "BASIC" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
            <div
              className={`${
                monthOffer === "STARTER" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {monthOffer === "STARTER" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Starter</h2>
                <h6 className="font-semibold text-gray-300">
                  For small-sale libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $27
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    monthOffer === "STARTER" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div
              className={`${
                monthOffer === "GROWTH" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {monthOffer === "GROWTH" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Growth</h2>
                <h6 className="font-semibold text-gray-300">
                  For fast growing Libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $45
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    monthOffer === "GROWTH" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
            <div
              className={`${
                monthOffer === "ELITE" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {monthOffer === "ELITE" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Elite</h2>
                <h6 className="font-semibold text-gray-300">
                  Ideal for large Companies and schooles
                </h6>
                <h3 className="font-semibold text-xl">
                  $70
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    monthOffer === "ELITE" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mx-5 gap-3 mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div
              className={`${
                yearOffer === "BASIC" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {yearOffer === "BASIC" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Basic</h2>
                <h6 className="font-semibold text-gray-300">
                  For small Libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $15
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    yearOffer === "BASIC" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
            <div
              className={`${
                yearOffer === "STARTER" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {yearOffer === "STARTER" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Starter</h2>
                <h6 className="font-semibold text-gray-300">
                  For small-sale libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $27
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    yearOffer === "STARTER" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div
              className={`${
                yearOffer === "GROWTH" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {yearOffer === "GROWTH" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Growth</h2>
                <h6 className="font-semibold text-gray-300">
                  For fast growing Libraries
                </h6>
                <h3 className="font-semibold text-xl">
                  $45
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    yearOffer === "GROWTH" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
            <div
              className={`${
                yearOffer === "ELITE" ? "border-accent" : "border-cardBorder"
              } card relative border rounded-2xl w-full`}
            >
              {yearOffer === "ELITE" && (
                <div className="bg-accent rounded-t-2xl py-3 text-sm text-center font-semibold">
                  TRY IT WITHOUT CREDIT CARD!
                </div>
              )}
              <img
                className="absolute top-0 -z-10 opacity-75"
                src={gradientImg}
                alt="landing gradient"
              />
              {/* text */}
              <div className="px-4 flex flex-col gap-y-3 mb-5 mt-3">
                <h2 className="font-bold text-lg">Elite</h2>
                <h6 className="font-semibold text-gray-300">
                  Ideal for large Companies and schooles
                </h6>
                <h3 className="font-semibold text-xl">
                  $70
                  <span className="font-normal text-lg text-gray-300">
                    /month
                  </span>
                </h3>
                <button
                  type="button"
                  className={` ${
                    yearOffer === "ELITE" ? "bg-accent" : "bg-secondary"
                  } rounded-full mt-3 cursor-pointer w-fit  px-4 py-1 border border-cardBorder hover:border-textSecondary primary-transition active:scale-95`}
                >
                  Try for Free
                </button>
              </div>
              <LineBreak />
              {/* features */}
              <div className="p-4">
                <h1>SPACE</h1>
                <div>
                  <h5>Unlimited User</h5>
                  <h5>Email & Live Support</h5>
                </div>
                <h1>REASERCH</h1>
                <div>
                  <h5>Keyword Finder</h5>
                  <h5>Common Keywords</h5>
                  <h5>Competitor Research</h5>
                  <h5>Backlink Research</h5>
                  <h5>500 Research Credits</h5>
                  <h5>100 Results per Credit</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <LineBreak />

      <div className="flex flex-col mx-4 mb-8 md:mx-14 gap-y-10">
        <div className="flex justify-center flex-col items-center gap-y-3 mt-5 md:mt-10">
          <h3 className="px-4 py-1 rounded-full border border-cardBorder bg-secondary w-fit text-center">
            Brain Page WIKI
          </h3>
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Learn more about Brain Page
          </h1>
          <p className="md:text-lg">
            Haven't found what you're looking for? Try the Brain Page's Wiki or
            &nbsp;
            <span className="text-accent cursor-pointer hover:underline">
              Contact us.
            </span>
          </p>
        </div>

        <div className="relative mx-5 my-3 flex items-center justify-center">
          <div className="bg-gradient-to-l from-secondary to-secondary via-cardBorder h-[1px] w-2/4 self-center"></div>
          <div
            className="absolute left-0 right-0 top-full h-6 -mt-2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(112,59,247,0.2) 2%, transparent 30%)",
            }}
          ></div>
        </div>
        <section>
          <div className="md:grid grid-cols-12 gap-5 md:mb-5">
            <div className="card col-span-6 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md mb-2 md:mb-0">
              <IoBookSharp className="size-10 text-accent" />
              <div className="flex flex-col">
                <h1 className="font-bold">Streamlined Book Management</h1>
                <p className="text-gray-400">
                  Organize, catalog, and track thousands of books effortlessly
                  with smart automation.
                </p>
              </div>
            </div>
            <div className="col-span-6 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
              <IoLibrary className="size-10 text-accent" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Seamless Member Experience</h1>
                <p>
                  Provide students and readers with quick checkouts, easy
                  renewals, and personalized access.
                </p>
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-12 gap-5 md:mb-5">
            <div className="col-span-4 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
              <MdOutlineSupportAgent className="size-10 text-accent" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Reliable Support & Security</h1>
                <p>
                  Keep your data safe with automated backups, role-based access,
                  and priority support.
                </p>
              </div>
            </div>
            <div className="col-span-4 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
              <ImUsers className="size-10 text-accent" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Flexible User Management</h1>
                <p>
                  Manage unlimited users — from librarians to students — with
                  custom permissions and controls.
                </p>
              </div>
            </div>
            <div className="col-span-4 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
              <ImUsers className="size-5 text-accent" />
              <div className="flex flex-col">
                <h1 className="font-semibold">Flexible User Management</h1>
                <p>
                  Manage unlimited users — from librarians to students — with
                  custom permissions and controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other More  */}
      </div>
    </div>
  );
};

export default Pricing;
