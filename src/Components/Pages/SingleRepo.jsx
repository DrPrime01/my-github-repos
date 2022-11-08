import React from "react";
import { useLocation } from "react-router-dom";
import Timestamp from "../OtherComponents/Timestamp";
import StarComponent from "../OtherComponents/StarComponent";
import { useEffect, useState } from "react";
import Iframes from "../OtherComponents/Iframes";

function SingleRepo() {
  const location = useLocation();
  const state = location.state;
  const [homepageLink, setHomepageLink] = useState("");

  function checkHomePageLink(homepage) {
    const linkPrefix = "https://";
    const homepageList = homepage.split();
    if (homepageList[0, 1, 2, 3, 4] == ["h", "t", "t", "p", "s"]) {
      setHomepageLink(homepageList.join());
    } else {
      setHomepageLink(`${linkPrefix}${homepageList.join()}`);
    }
  }
  useEffect(() => {
    state.homepage ? checkHomePageLink(state.homepage) : null
  }, []);

  return (
    <div className="flex justify-between xs:flex-col h-screen xs:h-45 p-12">
      <div className="flex flex-col justify-between w-1/2 xs:w-auto">
        <h3 className="text-6xl text-black xs:text-4xl font-bold capitalize mb-8">
          {state.name}
        </h3>
        <div>
          <h3 className="text-5xl text-gray-800 xs:text-4xl font-medium capitalize mb-8">
            Description
          </h3>
          <p className="text-xl text-gray-600 mb-4">
            {state.description ? state.description : "No Description Available"}
          </p>
        </div>
        <div className="flex flex-row items-center xs:items-stretch xs:flex-col w-auto p-3">
          <p className="text-xl text-gray-700 font-normal capitalize mb-3 mr-4 xs:mr-0 flex flex-row">
            <span className="mr-2 text-black font-medium">Created:</span>{" "}
            <Timestamp timeStamp={state.created_at} />
          </p>
          <p className="text-xl text-gray-700 font-normal capitalize mb-3 mr-4 xs:mr-0">
            <span className="mr-2 text-black font-medium">Language:</span>
            {state.language ? state.language : "No Language"}
          </p>
          <span className="xs:flex xs:flex-row">
            <span className="mr-2 text-black font-medium hidden xs:block text-xl capitalize">
              Stars:
            </span>
            <StarComponent starCount={state.stargazers_count} />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center border-4 border-gray-700 xs:hidden">
        {state.homepage ? (
          <Iframes homepageLink={homepageLink} />
        ) : (
          "No Live Preview Available"
        )}
      </div>
    </div>
  );
}

export default SingleRepo;
