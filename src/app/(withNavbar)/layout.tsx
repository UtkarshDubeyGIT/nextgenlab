import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div>sdfsofnsof</div>
      <main>{children}</main>
      <Footer />
    </section>
  );
}
