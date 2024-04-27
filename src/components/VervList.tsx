import React from "react";
import VervCard from "@/components/VervCard";

type Verv = {
    logo: string;
    name: string;
    description: string;
    link: string;
    accentColor: string;
};

type VervListProps = {
    vervList: Verv[];
};

export default function VervList({ vervList }: VervListProps) {
  return (
    <div className="container mx-auto pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {vervList.map((verv: Verv, index: number) => (
                <VervCard
                    key={index}
                    logo={verv.logo}
                    name={verv.name}
                    description={verv.description}
                    link={verv.link}
                    accentColor={verv.accentColor}
                />
            ))}
        </div>
    </div>
  );
}
