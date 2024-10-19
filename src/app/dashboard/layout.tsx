import Sidebar from "./_components/Sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      {/* Sidebar
      <Sidebar /> */}
{/*       
      <div className="flex-1 p-4"> */}
        {children}
      {/* </div> */}
    </div>
  );
}
