import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeacherFeatures from "@/components/portal-guru";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <TeacherFeatures />
      <Footer />
    </div>
  );
}
