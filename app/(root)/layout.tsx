import MobileNavBar from "@/components/common/MobileNavBar";
import Sidebar  from "@/components/common/Sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="root">
      <Sidebar/>
      <MobileNavBar/>
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
}
