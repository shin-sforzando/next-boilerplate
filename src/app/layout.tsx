import "@/styles/globals.css";
import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "next-boilerplate",
	description: "Template repository for Next.js",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
