import Genres from "@/components/home/genres";
import TopArtists from "@/components/home/topArtists";
import TopCharts from "@/components/home/topCharts";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* banner */}
      <Image
        src={'/song_banner.png'}
        alt="Banner"
        width={1920}
        height={1080}
        className="h-80 md:h-[600px] object-cover"
      />

      <div className="absolute top-32 md:top-60 flex flex-col pl-12 md:pl-24">
        <h1 className="font-bold text-4xl md:text-8xl">Flower</h1>
        <div className="flex items-center gap-x-2 md:gap-x-4 text-xs md:text-xl">
          <h2>JISOO</h2>
          <p>490M plays</p>
        </div>

        <div className="mt-3 md:mt-6 flex items-center gap-x-4">
          <Button
            size={"lg"}
            className="hidden md:flex rounded-full font-bold bg-blue-500 hover:bg-blue-500/90 text-white"
          >
            Listen Now
          </Button>
          <Button
            size={"icon"}
            className="md:hidden flex rounded-full font-bold bg-blue-500 hover:bg-blue-500/90 text-white size-8"
          >
            <PlayIcon />
          </Button>
          <Button
            size={"icon"}
            className="bg-transparent rounded-full hover:bg-transparent border-2 border-white text-white size-8"
          >
            <HeartIcon />
          </Button>

        </div>
      </div>


      {/* grid */}

      <div className="grid grid-cols-1 m-3 md:m-6 gap-3 md:gap-5 ">

        {/* top artists */}
        <TopArtists />

        {/* top genres */}
        <Genres />
        {/* top charts */}
        <TopCharts />
      </div>
    </div>
  );
}
