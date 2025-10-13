import { LuDatabaseBackup } from "react-icons/lu";
import Preview from "./Preview";
import { IoTimerOutline } from "react-icons/io5";
import { BsFillCalendarDateFill } from "react-icons/bs";

const CloudSync = () => {
  return (
    <div className="overflow-hidden py-8 md:py-20 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <Preview
              pic="/dash2.png"
              className="card bg-secondary rounded-r-md p-2 border border-gray-600 text-center md:-ml-4 lg:-ml-0"
            />
          </div>

          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-accent">
                Cloud Sync Library Management
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-primary sm:text-5xl">
                Cloud Sync keeps your digital library updated across all
                devices.
              </p>
              <p className="mt-6 text-lg/8 textPrimaryLight">
                Manage books, members, and records with a secure, cloud-based
                library management system. Access your catalog anytime,
                anywhere.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="font-semibold text-primary">
                    <IoTimerOutline className="absolute top-1 left-1 size-5 text-accent" />
                    Real-Time Book Synchronization
                  </dt>
                  <dd className="inline text-textPrimaryLight">
                    Instantly reflect new titles or edits across your
                    library&apos;s entire digital catalog, accessible on any
                    device.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-primary">
                    <BsFillCalendarDateFill className="absolute top-1 left-1 size-5 text-accent" />
                    Automated Due Date Reminders
                  </dt>
                  <dd className="inline text-textPrimaryLight">
                    Send email or SMS alerts for book returns, renewals, or
                    overdue notices.
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="font-semibold text-primary">
                    <LuDatabaseBackup className="absolute top-1 left-1 size-5 text-accent" />
                    Smart Search & Discovery
                  </dt>
                  <dd className="inline text-textPrimaryLight">
                    Help users quickly find books, journals, or digital media
                    with advanced search and filters.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSync;
