import React from "react";
import VervList from "@/components/VervList";
import data from "../assets/data.js";

export default function DiscoverPage() {
  return (
    <div>
      <VervList vervList={data} />
    </div>
  );
}