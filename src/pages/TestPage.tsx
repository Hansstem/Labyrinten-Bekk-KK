import VervCard from "@/components/VervCard";
import React from "react";
import logo from "@/assets/tp_logo.png";
import FilterComponent from "@/components/FilterComponent";

export default function TestPage() {
  return (
    <div>
      <VervCard
        logo={logo}
        name="Tp"
        description="Studentsamfundet is a student union dedicated to organizing social events, cultural activities, and advocacy for student rights."
        link="link.com"
        accentColor="#030666"
      />
      <FilterComponent />
    </div>
  );
}
