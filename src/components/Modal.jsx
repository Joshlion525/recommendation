import React from "react";

const Modal = ({ card, closeModal }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-10 rounded-lg w-3/4 max-w-md">
				<div className="flex justify-end">
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded"
						onClick={closeModal}
					>
						Close
					</button>
				</div>
				<div className="flex justify-center">
					<img src={card.title} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Modal;
