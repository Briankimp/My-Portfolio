import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="">
      <div className=" min-w-full" >
        <div className=" items-center md:w-1/2 ">
          <h1 className='p-3'>Software Developer</h1>
          <h1 className="px-3 text-5xl  ">Hello I'm  <br></br>  <span className=" text-accent" >Brian Munene</span></h1>
        </div>
      </div>

    </main>
  );
}
