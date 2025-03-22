"use client";
import Client from "@/components/Client";
import DigitalService from "@/components/DigitalService";

import Hero from "@/components/Hero";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div className="">
			<div className="h-screen">
				<Hero />
				<DigitalService />



				<div className="bg-[url(/sales.svg)] bg-top bg-cover bg-no-repeat w-full lg:max-h-[1036px] pt-[100px] bg-[#021452]  ">

					<div
						className={`bg-[#021452] py-6 border-t border-t-white/10 text-center text-white text-[14px] leading-[21px] font-bold ${roboto.className}`}>
						@2025 - ENVOBYTE, All rights are reserved.
					</div>
					{/* <div className="h-[500px] w-full"></div> */}
				</div>
			</div>
		</div>
	);
}






