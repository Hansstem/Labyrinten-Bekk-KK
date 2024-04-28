import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.js";

type VervCardProps = {
  logo: string;
  name: string;
  description: string;
  link: string;
  accentColor: string;
  categories: Array<{ category_name: string; value: string | string[] }>;
};

type CategoryKey = "Location" | "Interest" | "Field" | "Hours Per Week";

// Map with explicitly typed keys
const categoryTranslations: Record<CategoryKey, string> = {
  Location: "Sted",
  Interest: "Interesse",
  Field: "Felt",
  "Hours Per Week": "Timer per uke",
};

export default function VervPage() {
  const { id } = useParams() as { id: string };
  const [verv, setVerv] = useState<VervCardProps | null>(null);

  useEffect(() => {
    const filteredData = data.filter((verv: { name: string }) => {
      return verv.name.toLowerCase().replace(" ", "-") === id;
    });
    if (filteredData.length > 0) {
      setVerv(filteredData[0]);
    }
  }, [id]);

  if (!verv) {
    return <div className="text-center py-10">Ingen informasjon funnet.</div>;
  }

  return (
    <div className="container mx-auto px-40 py-10">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 pr-32">
          <div className="flex items-center space-x-4">
            <img
              src={`/logos/${verv.logo}`}
              alt="Logo"
              className="h-24 w-42 object-contain"
            />
            <div className="flex-1 items-center">
              <h1 className="text-3xl font-bold">{verv.name}</h1>
            </div>
          </div>
        </div>
        <div className="p-4 flex space-between">
          <div className="w-1/2 text-left">
            <h1 className="text-2xl font-semibold mt-2 mb-4">Beskrivelse:</h1>
            <p className="text-gray-700 flex-1 ">{verv.description}</p>
          </div>
          <div className="flex-2 w-1/2 justify-end ml-60">
            <div className=" text-left">
              <h2 className="text-2xl font-semibold mt-2 mb-4">Detaljer:</h2>
              {verv.categories.map((category, index) => (
                <p key={index} className="text-md text-gray-600">
                  <strong>
                    {categoryTranslations[
                      category.category_name as CategoryKey
                    ] || category.category_name}
                    :
                  </strong>{" "}
                  {Array.isArray(category.value)
                    ? category.value.join(", ")
                    : category.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <a
            href={verv.link}
            className="inline-block px-6 py-3 rounded-lg text-white"
            style={{ backgroundColor: verv.accentColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Besøk Nettsiden
          </a>
        </div>
      </div>
    </div>
  );
}
