import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdInventory2 } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaCoins } from "react-icons/fa6";
import { ImTruck } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "../assets/KujaLogo.svg"

const SideNav = () => {
	return (
		<div className="bg-black min-h-screen w-[10%] text-gray-500 text-center flex flex-col gap-10">
			<div className="py-3 flex justify-center">
				<img src={Logo} alt="" className="w-[40%]" />
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<GoHomeFill className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Home</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<MdInventory2 className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Inventory</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<GrTransaction className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Transactions</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<FaCoins className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Finance</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<ImTruck className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Van Warehouse</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<BsPeopleFill className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Customers</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<SiGoogleanalytics className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Analytics</h1>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-center">
					<IoLocationSharp className="text-3xl" />
				</div>
				<div>
					<h1 className="text-sm">Logistics</h1>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
