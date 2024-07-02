import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="bg-[#E5B611] font-bold px-8 py-3"
				>
					Recommended order
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-white w-[1000px] sm:w-[540px]">
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when
						you're done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4"></div>
					<div className="grid grid-cols-4 items-center gap-4"></div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
