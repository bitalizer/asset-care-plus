import React from "react";
import { BsDownload } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";

export const CardDetails = () => {
  return (
    <>
      <div>
        <MdOutlineExplore size={17} className="mr-2" />
        Explore from here
      </div>
      <div>
        <BsDownload size={17} className="mr-2" />
        Download data <hr className="mt-2 mb-2" />
      </div>

      <div>
        <FiRefreshCcw size={17} className="mr-2" />
        Clear cache and refresh
      </div>
    </>
  );
};
