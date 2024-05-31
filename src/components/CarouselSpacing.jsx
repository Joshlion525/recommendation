import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import Image1 from "../assets/image.svg";
import Image2 from "../assets/image1.svg";

export function CarouselSpacing() {
	const images = [Image1, Image2, Image1, Image2, Image1];
	return (
		<Carousel className="w-[750px] ">
			<CarouselContent className="flex -ml-1 ">
				{images.map((image, index) => (
					<CarouselItem
						key={index}
						className="pl-2  md:basis-1/2 lg:basis-6/12"
					>
						<div className="p-1">
							<Card>
								<CardContent>
									<img
										src={image}
										alt={`Carousel item ${index + 1}`}
										className="rounded-lg"
										style={{
											height: "100%",
											width: "100%",
										}}
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
