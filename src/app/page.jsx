import CarouselImages from "@/components/feed/home-carousel";
import Image from "next/image";
import Banner from '@/public/images/home/coupon-code.webp'

export default function Home() {
  return (
    <div>
      <CarouselImages />
      <div className="w-full aspect-[3.09] relative my-4 py-4 mb-52">
          <Image src={Banner} alt="Explore" fill className="object-cover" />
        </div>
    </div>
  );
}
