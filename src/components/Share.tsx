"use client";

import { shareAction } from "@/actions";
import Image from "next/image";
import { useState } from "react";
import ImageEditor from "./ImageEditor";
import { MdClose } from "react-icons/md";

export default function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(FormData) => shareAction(FormData, settings)}
    >
      {/* avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src={"/general/avatar.png"} alt="" width={40} height={40} />
      </div>
      {/* others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?"
          className="bg-transparent outline-none placeholder:text-textGray text-2xl"
        />
        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : settings.type === "wide"
                  ? "aspect-video object-cover"
                  : ""
              }`}
            />
            <button
              className="absolute top-4 left-4 bg-white text-black px-4 rounded-full bg-opacity-50 hover:bg-opacity-85 font-bold text-sm duration-200"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </button>
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full bg-opacity-50 hover:bg-opacity-85 font-bold text-md duration-200"
              onClick={() => setMedia(null)}
            >
              <MdClose />
            </button>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls></video>
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold"
              onClick={() => setMedia(null)}
            >
              x
            </button>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items center justify-between gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              id="file"
              className="hidden"
              accept="image/*,video/*"
              onChange={handleMediaChange}
            />
            <label htmlFor="file">
              <Image
                src={"icons/image.svg"}
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              src={"icons/gif.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"icons/poll.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"icons/emoji.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"icons/schedule.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src={"icons/location.svg"}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full py-2 px-4"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
