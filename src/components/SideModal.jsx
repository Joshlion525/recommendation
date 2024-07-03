import React, { useState } from "react";

const SideModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
				onClick={toggleModal}
			>
				Open Modal
			</button>
			<div
				className={`fixed top-0 right-0 h-screen bg-red-200 transition-transform duration-500 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ width: "80%" }}
			>
				<button
					className="mt-5 px-4 py-2 bg-red-500 text-white rounded ml-auto block"
					onClick={toggleModal}
				>
					Close
				</button>
				<div className="p-5">
					<h1 className="text-2xl font-bold">
						This is the modal content
					</h1>
					<p>More content can go here.</p>
				</div>
			</div>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30"
					onClick={toggleModal}
				></div>
			)}
		</div>
	);
};

export default SideModal;
