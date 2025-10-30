import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HeadSchoolFeatures from "@/components/portal-kepala-sekolah";
import ParentStudentFeatures from "@/components/portal-guru";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeadSchoolFeatures />
      <Footer />
    </div>
  );
}
