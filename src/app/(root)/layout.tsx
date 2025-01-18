import type { Metadata } from "next";
import LeftNavbar from "./dashboard/_components/leftnavbar";
import RightSideBar from "./dashboard/_components/rightsidebar";

export const metadata: Metadata = {
  title: "CampusBid",
  description:
    "The College Network to Chill, Share & Explore!",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

  <div className="h-screen overflow-hidden flex justify-center">
    <LeftNavbar/>
    <div className="overflow-y-auto">
    {children}

    </div>
    <RightSideBar/>
    </div>

);
}
