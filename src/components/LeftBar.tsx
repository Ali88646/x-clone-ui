import Image from "next/image";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href={"/"} className="p-2 rounded-full hover:bg-[#181818]">
          <Image src={"icons/logo.svg"} alt="logo" width={38} height={38} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-3">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-3"
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href={"/"}
          className="xxl:hidden  bg-white text-black rounded-full  w-12 h-12 flex items-center justify-center"
        >
          <Image src={"icons/post.svg"} alt="post" width={24} height={24} />
        </Link>
        <Link
          href={"/"}
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between rounded-full py-2 pr-4 hover:bg-[#181818] cursor-pointer">
        {/* user info */}
        <div className="flex items-center gap-2">
          {/* image */}
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={"/general/avatar.png"} alt="user_avatar" fill />
          </div>
          {/* text */}
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ali Tunio</span>
            <span className="text-sm text-textGray">@ali88646</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
}
