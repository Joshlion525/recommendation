import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircleLight } from "react-icons/pi";

const SideModal = ({ isOpen, setIsOpen }) => {

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className={`fixed top-0 right-0 h-screen bg-[#F5F5F5] transition-transform duration-500 z-50 px-10 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ width: "40%" }}
			>
				<div className="flex justify-between items-center py-5">
					<h1>Order Recommendation</h1>
					<div>
						<RxCross2
							className="font-bold text-2xl cursor-pointer"
							onClick={toggleModal}
						/>
					</div>
				</div>
				<div className="p-5 flex gap-5 bg-[#E5B611] rounded-md">
					<PiWarningCircleLight className="text-3xl " />
					<p>
						We suggest placing the following order, considering your
						average monthly volume and the sales potential for your
						business
					</p>
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
