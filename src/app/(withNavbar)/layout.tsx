import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";
export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section >
        <Navbar />
        {children}
        <Footer />
    </section>
    
  );
}
