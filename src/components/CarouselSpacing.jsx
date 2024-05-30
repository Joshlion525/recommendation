import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
	return (
		<Carousel className="w-[650px] ">
			<CarouselContent className="-ml-1">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem
						key={index}
						className="pl-2 md:basis-1/2 lg:basis-6/12"
					>
						<div className="p-1">
							<Card className="">
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<span className="text-3xl font-semibold">
										{index + 1}
									</span>
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
