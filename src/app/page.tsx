import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray px-4 pt-4 sticky top-0 bg-black z-10 backdrop-blur-md bg-opacity-75">
        <Link
          className="pb-3 flex items-center border-b border-iconBlue "
          href={"/"}
        >
          For You
        </Link>
        <Link className="pb-3 flex items-center" href={"/"}>
          Following
        </Link>
        <Link className="pb-3 items-center hidden md:flex" href={"/"}>
          React Js
        </Link>
        <Link className="pb-3 items-center hidden md:flex" href={"/"}>
          Javascript
        </Link>
        <Link className="pb-3 items-center hidden md:flex" href={"/"}>
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
