import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusBid",
  description:
    "The College Network to Chill, Share & Explore!",
};


export default function InitialInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-main-height">{children}</div>;
}
