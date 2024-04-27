import React, { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

const location = [
  { id: "oslo", label: "Oslo" },
  { id: "bergen", label: "Bergen" },
  { id: "trondheim", label: "Trondheim" },
  { id: "tromso", label: "Tromsø" },
];
const interest = [
  { id: "markedsføring", label: "Markedsføring" },
  { id: "salg", label: "Salg" },
  { id: "design", label: "Design" },
  { id: "utvikling", label: "Utvikling" },
  { id: "prosjektledelse", label: "Prosjektledelse" },
  { id: "økonomi", label: "Økonomi" },
  { id: "sosialt", label: "Sosialt" },
  { id: "sosiale medier", label: "Sosiale medier" },
];
const field = [
  { id: "ai", label: "AI" },
  { id: "entreprenørskap", label: "Entreprenørskap" },
  { id: "servering", label: "Servering" },
  { id: "næringsliv", label: "Næringsliv" },
  { id: "finans", label: "Finans" },
  { id: "ingeniør", label: "Ingeniør" },
  { id: "data", label: "Data" },
];
const expectedHours = [
  { id: "1-10", label: "1-10 timer" },
  { id: "11-20", label: "11-20 timer" },
  { id: "20+", label: "20+ timer" },
];

export default function FilterComponent() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkLocations, setCheckLocations] = useState([]);
  const [checkInterests, setCheckInterests] = useState([]);
  const [checkFields, setCheckFields] = useState([]);
  const [checkExpectedHours, setCheckExpectedHours] = useState([]);
  const handleCheckedChangeLocation = (state: any, id: string) => {
    setCheckLocations((prev) => {
      return {
        ...prev,
        [id]: state,
      };
    });
  };
  const handleCheckedChangeInterest = (state: any, id: string) => {
    setCheckInterests((prev) => {
      return {
        ...prev,
        [id]: state,
      };
    });
  };
  const handleCheckedChangeField = (state: any, id: string) => {
    setCheckFields((prev) => {
      return {
        ...prev,
        [id]: state,
      };
    });
  };
  const handleCheckedChangeExpectedHours = (state: any, id: string) => {
    setCheckExpectedHours((prev) => {
      return {
        ...prev,
        [id]: state,
      };
    });
  };

  return (
    <div>
      <b className="flex items-center space-x-2">Lokasjon</b>
      {location.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            key={item.id}
            onCheckedChange={(checked) => {
              handleCheckedChangeLocation(checked, item.id);
            }}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}

      <b className="flex items-center space-x-2">Interesse</b>
      {interest.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            key={item.id}
            onCheckedChange={(checked) => {
              handleCheckedChangeInterest(checked, item.id);
            }}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
      <b className="flex items-center space-x-2">Fagområder</b>
      {field.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            key={item.id}
            onCheckedChange={(checked) => {
              handleCheckedChangeField(checked, item.id);
            }}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
      <b className="flex items-center space-x-2">
        Antall forventet timer i uka
      </b>
      {expectedHours.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            key={item.id}
            onCheckedChange={(checked) => {
              handleCheckedChangeExpectedHours(checked, item.id);
            }}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
    </div>
  );
}
