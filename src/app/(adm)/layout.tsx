import SideBar from "@/components/ui/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <SideBar></SideBar>
        {children}
    </>
  );
}