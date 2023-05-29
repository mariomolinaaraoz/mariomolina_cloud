import Image from "next/image";
import React from "react";

export default function Images() {
	const images = [
		{
			src: "/assets/img.jpg",
			rotate: "-rotate-3",
		},
		{
			src: "/assets/img2.jpg",
			rotate: "rotate-3",
		},
		{
			src: "/assets/img3.jpg",
			rotate: "rotate-3",
		},
		{
			src: "/assets/img4.jpg",
			rotate: "-rotate-3",
		},
		{
			src: "/assets/img5.jpg",
			rotate: "rotate-3",
		},
	];

	return (
		<div className="relative mx-auto max-w-7xl p-2 sm:px-24 mt-20 flex justify-center items-center gap-10 relative overflow-hidden h-96">
			{images.map(({ src, rotate }, index) => {
				return (
					<div
						className={`aspect-4  w-72 h-80 rounded-lg relative ${rotate}`}
						key={index}
					>
						<Image
							src={src}
                            layout='fill'
							alt=""
							className="rounded-lg object-cover object-center hover:scale-110 transition-all"
						/>
					</div>
				);
			})}
		</div>
	);
}