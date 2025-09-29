
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { LuDatabaseBackup } from "react-icons/lu";
import Preview from "./Preview";

const WhyUs = () => {
  return (
    <div className="overflow-hidden py-8 md:py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-accent">
                Streamline Your Library
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                The Smarter Way
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Simplify cataloging, circulation, and reporting with an
                all-in-one system built for libraries of every size. Save time,
                reduce errors, and give readers a seamless experience.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <FaCloudUploadAlt className="absolute top-1 left-1 size-5 text-accent" />
                    Instant Catalog Updates.
                  </dt>
                  <dd className="inline">
                    Add or update books in seconds — changes sync across your
                    entire library instantly.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <GrSecure className="absolute top-1 left-1 size-5 text-accent" />
                    Secure Member Management.
                  </dt>
                  <dd className="inline">
                    Protect data with built-in privacy safeguards and role-based
                    access controls.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="font-semibold text-white">
                    <LuDatabaseBackup className="absolute top-1 left-1 size-5 text-accent" />
                    Automatic Data Backups.
                  </dt>
                  <dd className="inline">
                    Your records are safely stored and regularly backed up, so
                    you never lose important information.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <Preview />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
