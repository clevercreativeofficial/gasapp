import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "GasApp - Jobs",
  description: "GasApp is a social media web application to foster youth social interactions, enable marketplace exploration and provide opportunities for growth and professional development with a focus on jobs in the environmental sectors.",
};

export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
      <>
        <Navbar />
        <div>{children}</div>
      </>
  );
}
