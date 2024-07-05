import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Image from "../assets/image.svg";
import Image1 from "../assets/image1.svg"

const Carousel = () => {
	const [selectedCard, setSelectedCard] = useState(null);
	const carouselRef = useRef(null);

	const cards = [
		{ id: 1, title: Image },
		{ id: 2, title: Image1 },
		{ id: 3, title: Image },
		{ id: 4, title: Image1 },
	];

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const closeModal = () => {
		setSelectedCard(null);
	};

	const scrollLeft = () => {
		carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
	};

	const scrollRight = () => {
		carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
	};

	return (
		<div className="relative flex items-center w-[850px] h-[300px]">
			<div
				onClick={scrollLeft}
				className="absolute left-0 z-10 p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
			>
				<SlArrowLeft />
			</div>
			<div className="overflow-hidden w-full">
				<div
					ref={carouselRef}
					className="flex space-x-4 overflow-x-auto p-5 scrollbar-hide"
					style={{ paddingLeft: "40px", paddingRight: "40px" }}
				>
					{cards.map((card) => (
						<div
							key={card.id}
							className="rounded-lg shadow-lg cursor-pointer flex-shrink-0"
							style={{ width: "450px", height: "250px" }}
							onClick={() => handleCardClick(card)}
						>
							<img
								src={card.title}
								alt={`Card ${card.id}`}
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
					))}
				</div>
			</div>
			<div
				onClick={scrollRight}
				className="absolute right-0 z-10 p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
			>
				<SlArrowRight />
			</div>
			{selectedCard && (
				<Modal card={selectedCard} closeModal={closeModal} />
			)}
		</div>
	);
};

export default Carousel;
