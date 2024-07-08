import React from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ card, closeModal }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg w-fit p-5 max-w-md">
				<div className="flex justify-end pb-5">
					<RxCross2 onClick={closeModal} className="text-xl cursor-pointer" />
				</div>
				<div className="flex justify-center">
					<img src={card.title} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Modal;
