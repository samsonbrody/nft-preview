import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=" flex items-center justify-center w-screen h-screen bg-slate-900">
      <Head>
        <title>NFT Preview</title>
        <meta name="description" content="here is an nft preview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nft-container bg-slate-800 mx-6 w-4/5 sm:w-2/4 lg:w-1/4 xl-1/4 h-4/6 rounded-2xl flex-col space-y-1 border border-orange-300">
        <img
          className="object-cover h-2/4 w-full p-6 blur-sm grayscale hover:grayscale-0 hover:blur-none hover:cursor-pointer transition-all ease-in-out duration-300"
          src="/nft.jpg"
          alt="nft"
        />
        <p className="text-slate-200 px-6 text-2xl">Equilibrium #3429</p>
        <p className="text-slate-500 px-6 text-md pt-2">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex items-center py-6 px-1">
          <svg
            width="50"
            height="25"
            viewBox="0 0 5 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>
          <p className="text-cyan-400">0.041 ETH</p>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 border border-slate-700"></hr>
        </div>
        <div className="flex items-center space-x-3 px-6 pt-8">
          <img src="/avatar.png" alt="avatar" className="h-8 w-8" />
          <p className="text-slate-400">
            Creation of <span className="text-slate-100">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}
