import Image from "next/image";
import POstInfo from "./POstInfo";
import PostInteraction from "./PostInteraction";

export default function Post() {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            fill="#71767b"
          />
        </svg>
        <span>reposted</span>
      </div>
      {/* post content */}
      <div className="flex gap-4">
        {/* avatar */}
        <div className="relative w-10 h-10 overflow-hidden">
          <Image
            src="/general/avatar.png"
            alt=""
            width={100}
            height={100}
            // tr={true}
            className="rounded-full"
          />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* top section */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Ali Ahmed</h1>
              <span className="text-textGray">@ali88646</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <POstInfo />
          </div>
          {/* text & media */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            aliquid harum est veritatis unde non, facere numquam cumque dicta
            officiis?
          </p>
          <Image src={"/general/post.jpeg"} alt="" width={600} height={600} />
          <PostInteraction />
        </div>
      </div>
    </div>
  );
}
