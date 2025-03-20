"use client";
import Image from "next/image";

const BlogSideBar = () => {
  return (
    <div className="col-md-2 !tw-border-l !tw-border-gray-200 !tw-border-solid !tw-border-t-0 !tw-border-r-0 !tw-border-b-0">
      <div className="tw-py-4 tw-space-y-8">
        <div className="flex flex-col">
          <div className="">
            <h5 className="tw-text-black tw-text-2xl tw-font-bold tw-leading-wide tw-flex tw-items-center">
              <a
                href="https://adao.ai"
                className="tw-text-black tw-inline-flex"
              >
                <span className="tw-inline tw-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                </span>
                <span>Get the ADAO tokens Today</span>
              </a>
            </h5>
          </div>
          <div className="tw-flex">
            <a
              href="https://adao.ai"
              className="tw-inline-flex"
            >
              <Image
                src="https://cdn.vnoc.com/images/blogs/1.png"
                alt="ADAO Token"
                width={0}
                height={0}
                sizes="100vw"
                className="tw-object-contain tw-w-full tw-h-[200px] tw-rounded"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <h5 className="tw-text-black tw-text-2xl tw-font-bold tw-leading-wide tw-flex tw-items-center">
              <a
                href="https://agentdao.com/"
                className="tw-text-black tw-inline-flex"
              >
                <span className="tw-inline tw-mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#FFC017"
                      d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                    ></path>
                  </svg>
                </span>
                <span>Get the ADAO tokens Today</span>
              </a>
            </h5>
          </div>
          <div className="tw-flex">
            <a
              href="https://agentdao.com/"
              className="tw-inline-flex"
            >
              <Image
                src="https://cdn.vnoc.com/images/blogs/2.png"
                alt="ADAO Token"
                width={0}
                height={0}
                sizes="100vw"
                className="tw-object-contain tw-w-full tw-h-[200px] tw-rounded"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
