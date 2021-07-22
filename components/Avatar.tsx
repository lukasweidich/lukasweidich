import { Image, useToasts } from "@geist-ui/react";
import axios from "axios";
import React, { useState } from "react";
import avatar from "../assets/lukasweidich.jpg";

const Avatar: React.FC<Record<string, unknown>> = () => {
	const [clicks, setClicks] = useState<number>(0);
	const [toasts, setToast] = useToasts();

	const clicksNeeded = 10;
	const sanitizedClicks = clicks % clicksNeeded;
	const easterEggCondition = sanitizedClicks === clicksNeeded - 1;

	const incrementClicks = async () => {
		setClicks(clicks + 1);

		if (easterEggCondition) {
			const {
				data: {
					slip: { advice },
				},
			} = await axios.get(
				`https://api.adviceslip.com/advice?addClicksAsQueryParameterToPreventCachingTheResponse=${clicks}`,
			);

			setToast({ text: advice });
		}
	};

	return (
		<Image
			src={avatar}
			alt="Lukas Weidich"
			title="Lukas Weidich"
			onClick={incrementClicks}
		/>
	);
};

export default Avatar;
