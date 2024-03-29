import React from "react";
import { Button } from '@nextui-org/react';
import { SiTwitter, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

export default function Social() {
	const socials = [SiTwitter, SiInstagram, SiGithub, SiLinkedin];

	return (
		<>		
		<div className="flex gap-5">
			{socials.map((Icon, index) => {
				return <Icon key={index} className="w-6 h-6 text-gray-700" />;
			})}
		</div>
		<Button
        auto
        color="secondary"
        icon={<SiTwitter fill="currentColor" />}
      />
		</>
	);
}