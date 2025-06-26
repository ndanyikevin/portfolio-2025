
import Image from "next/image";


export default function ShoeCard({ imgURL, changeBigShoeImg, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}
    ><div class="bg-center bg-cover "></div>
      <div class="flex justify-center items-center bg-card rounded-xl  bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
        <Image 
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103.34}
        className="object-contain"
        />

      </div>
      
    </div>
  );
}
