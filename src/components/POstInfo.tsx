import Image from "next/image";

export default function POstInfo() {
  return (
    <div className="cursor-pointer w-4 h-4">
      <Image src={"/icons/infoMore.svg"} alt="" width={16} height={16} />
    </div>
  );
}
