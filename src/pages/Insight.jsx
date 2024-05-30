import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import SideNav from "../components/SideNav";
import product from "../assets/Product.svg";
import { CarouselSpacing } from "@/components/CarouselSpacing";

const Insight = () => {
	return (
		<div className="flex">
			<SideNav />
			<div className="flex-1">
				<div className="flex justify-between items-center py-3 px-10 border-b-2 border-gray-400 bg-[#F5F5F5]">
					<div className="flex items-center gap-4">
						<div className="border border-gray-400 p-1 rounded-lg">
							<BiArrowBack className="text-xl" />
						</div>
						<div>
							<h1 className="font-bold text-xl">Insights</h1>
						</div>
					</div>
					<div className="flex items-center gap-10">
						<div className="flex items-center gap-3">
							<div className="border p-2 rounded-md bg-gray-200">
								<FaWarehouse className="text-2xl text-[#737373]" />
							</div>
							<div>
								<h1>KMS Nigeria Limited</h1>
							</div>
							<div>
								<FaCaretDown className="text-[#737373] text-lg" />
							</div>
						</div>
						<div className="flex items-center gap-3 bg-black rounded-full w-fit py-3 px-3">
							<div>
								<BsStars className="text-white text-2xl" />
							</div>
							<div>
								<h1 className="text-white">Insights</h1>
							</div>
							<div className="bg-red-500 p-1.5 rounded-full h-2 w-2"></div>
						</div>
						<div className="flex items-center gap-2">
							<div>
								<BsFillBellFill className="text-[#737373] text-2xl" />
							</div>
							<div>
								<h1>Notifications</h1>
							</div>
							<div className="bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs">
								<h1>9+</h1>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="bg-[#E5B611] p-2 rounded-full">
								<BsPersonFill className="text-3xl text-white" />
							</div>
							<div>
								<FaCaretDown className="text-[#737373] text-xl" />
							</div>
						</div>
					</div>
				</div>
				<div className="px-10 py-7 bg-[#F5F5F5] flex gap-10">
					<div className="bg-white rounded-lg flex-1">
						<div className="bg-black text-white py-5 px-7 rounded-t-lg">
							<h1>Product Replenishment</h1>
						</div>
						<div className="p-7">
							<div className="p-5 bg-[#F5F5F5] rounded-lg">
								<h1>
									You're running low on the products below;
									please contact your CXC Agent to restock as
									soon as possible
								</h1>
								<div className="flex justify-end pt-4">
									<button className="bg-[#E5B611] font-bold px-8 py-3 rounded-md">
										Recommended order
									</button>
								</div>
							</div>
							<div className="py-5 grid grid-cols-2">
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
										<h1 className="text-[#404040]">
											<span className="text-[#808080]">
												Qty left:
											</span>{" "}
											50
										</h1>
									</div>
								</div>
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
										<h1 className="text-[#404040]">
											<span className="text-[#808080]">
												Qty left:
											</span>{" "}
											50
										</h1>
									</div>
								</div>
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
										<h1 className="text-[#404040]">
											<span className="text-[#808080]">
												Qty left:
											</span>{" "}
											50
										</h1>
									</div>
								</div>
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
										<h1 className="text-[#404040]">
											<span className="text-[#808080]">
												Qty left:
											</span>{" "}
											50
										</h1>
									</div>
								</div>
							</div>
							<span className="block w-full h-[2px] bg-[#BFBFBF] my-10"></span>
							<div className="bg-[#F5F5F5]">
								<div className="p-5 bg-[#F5F5F5] rounded-lg">
									<h1>
										The demand for the products below has
										increased in your area; consider
										stocking up on them as soon possible
									</h1>
									<div className="flex justify-end pt-4">
										<button className="bg-[#E5B611] font-bold px-8 py-3 rounded-md">
											Recommended order
										</button>
									</div>
								</div>
							</div>
							<div className="py-5 grid grid-cols-2">
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
									</div>
								</div>
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
									</div>
								</div>
								<div className="flex items-center gap-2 py-4">
									<div>
										<img
											src={product}
											alt=""
											className=""
										/>
									</div>
									<div className="text-sm">
										<h1 className="font-bold">
											Budweiser 600ml * 12 (RB)
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg flex-1">
						<div className="bg-black text-white py-5 px-7 rounded-t-lg">
							<h1>Increase sales</h1>
						</div>
						<div className="p-7">
							<div className="p-5 bg-[#F5F5F5] rounded-lg">
								<h1>
									Discover selling opportunities to boost your
									sales. Get ready to sell more, make your
									customers happy, and grow like never before
								</h1>
							</div>
							<div className="flex justify-center py-10">
								<CarouselSpacing></CarouselSpacing>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Insight;
