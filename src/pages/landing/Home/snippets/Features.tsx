// import React from 'react'
import { IoBookSharp, IoLibrary } from "react-icons/io5";
import { MdOutlineSupportAgent, MdOutlineInsights } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { TbDatabaseDollar } from "react-icons/tb";

const Features = () => {
  return (
    <div className="flex flex-col mx-4 mb-8 md:mx-14 gap-y-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold">
        From features to functionally
        <br /> how Brain Page rises above the rest
      </h1>

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
          <div className="col-span-5 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
            <IoBookSharp className="size-10 text-accent" />
            <div className="flex flex-col">
              <h1 className="font-bold">Streamlined Book Management</h1>
              <p className="text-gray-400">
                Organize, catalog, and track thousands of books effortlessly
                with smart automation.
              </p>
            </div>
          </div>
          <div className="col-span-7 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
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
          <div className="col-span-7 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
            <MdOutlineSupportAgent className="size-10 text-accent" />
            <div className="flex flex-col">
              <h1 className="font-semibold">Reliable Support & Security</h1>
              <p>
                Keep your data safe with automated backups, role-based access,
                and priority support.
              </p>
            </div>
          </div>
          <div className="col-span-5 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
            <ImUsers className="size-10 text-accent" />
            <div className="flex flex-col">
              <h1 className="font-semibold">Flexible User Management</h1>
              <p>
                Manage unlimited users — from librarians to students — with
                custom permissions and controls.
              </p>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-12 gap-5 md:mb-5">
          <div className="col-span-5 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
            <TbDatabaseDollar className="size-10 text-accent" />
            <div className="flex flex-col">
              <h1 className="font-semibold">Cost-Effective Solution</h1>
              <p>
                Reduce manual work and save resources with an affordable
                all-in-one library system.
              </p>
            </div>
          </div>
          <div className="col-span-7 flex flex-row gap-4 w-full p-6 bg-secondary rounded-md card mb-2 md:mb-0">
            <MdOutlineInsights className="size-10 text-accent" />
            <div className="flex flex-col">
              <h1 className="font-semibold">Smart Insights & Reports</h1>
              <p>
                Generate detailed usage statistics, lending history, and
                performance reports in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
