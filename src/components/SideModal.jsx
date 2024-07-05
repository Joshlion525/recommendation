import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircleLight } from "react-icons/pi";
import budweiser from "../assets/BudweiserBottle.svg";


const SideModal = ({ isOpen, setIsOpen }) => {

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className={`fixed top-0 right-0 h-screen bg-[#F5F5F5] transition-transform duration-500 z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ width: "40%" }}
			>
				<div className="flex justify-between items-center py-5 px-10 bg-white">
					<h1>Order Recommendation</h1>
					<div>
						<RxCross2
							className="font-bold text-2xl cursor-pointer"
							onClick={toggleModal}
						/>
					</div>
				</div>
				<div className="px-10">
					<div className="p-5 my-8 flex gap-5 bg-[#E5B611] rounded-md">
						<PiWarningCircleLight className="text-4xl " />
						<p>
							We suggest placing the following order, considering
							your average monthly volume and the sales potential
							for your business
						</p>
					</div>
					<div className="bg-white rounded-lg">
						<table className="w-full text-left">
							<thead>
								<tr className="font-bold p-5 border-b">
									<th className="p-5">Product</th>
									<th className="p-5">Recommended qty</th>
									<th className="p-5">Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 border-b">
									<td className="p-5 flex items-center gap-2 py-4">
										<img
											src={budweiser}
											alt="Budweiser"
											className="w-12 h-12"
										/>
										<div className="text-sm">
											<h1 className="font-bold">
												Budweiser 600ml × 12 (RB)
											</h1>
											<h1 className="text-[#404040]">
												<span className="text-black font-medium">
													2,800 /
												</span>{" "}
												case
											</h1>
										</div>
									</td>
									<td className="p-5">500</td>
									<td className="p-5">1,400,000.00</td>
								</tr>
								<tr className="p-5 font-bold bg-gray-200">
									<td className="p-5">Total</td>
									<td></td>
									<td className="p-5">9,800,000</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-10"
					onClick={toggleModal}
				></div>
			)}
		</div>
	);
};

export default SideModal;
