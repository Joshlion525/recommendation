import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { MdInventory2 } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaCoins } from "react-icons/fa6";
import { ImTruck } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "../assets/WhatsApp Image 2024-05-29 at 08.34.05_8dfafa97.jpg";

const Insight = () => {
	return (
		<div className="flex">
			<div className="bg-black min-h-screen w-[10%] text-gray-500 text-center flex flex-col gap-10">
				<div className="py-5">
					<h1 className="text-white italic text-3xl">KUJA</h1>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<GoHomeFill className="text-3xl" />
					</div>
					<div>
						<h1>Home</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<MdInventory2 className="text-3xl" />
					</div>
					<div>
						<h1>Inventory</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<GrTransaction className="text-3xl" />
					</div>
					<div>
						<h1>Transactions</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<FaCoins className="text-3xl" />
					</div>
					<div>
						<h1>Finance</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<ImTruck className="text-3xl" />
					</div>
					<div>
						<h1>Van Warehouse</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<BsPeopleFill className="text-3xl" />
					</div>
					<div>
						<h1>Customers</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<SiGoogleanalytics className="text-3xl" />
					</div>
					<div>
						<h1>Analytics</h1>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-center">
						<IoLocationSharp className="text-3xl" />
					</div>
					<div>
						<h1>Logistics</h1>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<div className="flex justify-between items-center py-4 px-10 border-b-2">
					<div className="flex items-center gap-4">
						<div className="border border-gray-400 p-1 rounded-lg">
							<BiArrowBack className="text-xl" />
						</div>
						<div>
							<h1 className="font-bold text-xl">Insights</h1>
						</div>
					</div>
					<div className="flex items-center gap-20">
						<div className="flex items-center gap-4">
							<div className="border p-2 rounded-md bg-gray-200">
								<FaWarehouse className="text-2xl text-gray-500" />
							</div>
							<div>
								<h1>KMS Nigeria Limited</h1>
							</div>
							<div>
								<FaCaretDown className="text-gray-500 text-lg" />
							</div>
						</div>
						<div className="flex items-center gap-2 bg-black rounded-full w-fit py-2 px-3">
							<div>
								<BsStars className="text-white text-lg" />
							</div>
							<div>
								<h1 className="text-white">Insights</h1>
							</div>
							<div className="bg-red-500 p-1.5 rounded-full h-2 w-2"></div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<BsFillBellFill className="text-gray-500 text-2xl" />
							</div>
							<div>
								<h1>Notifications</h1>
							</div>
							<div className="bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
								<h1>9+</h1>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<div className="bg-yellow-400 p-2 rounded-full">
								<BsPersonFill className="text-2xl text-white" />
							</div>
							<div>
								<FaCaretDown className="text-gray-500 text-xl" />
							</div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Insight;
