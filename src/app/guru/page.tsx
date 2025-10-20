import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ParentStudentFeatures from "@/components/portal-siswa-ortu";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <ParentStudentFeatures />
      <Footer />
    </div>
  );
}
