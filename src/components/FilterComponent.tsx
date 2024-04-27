import React from "react";
import { useRecoilState } from "recoil";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import {
  locations,
  interests,
  fields,
  expectedHours,
} from "../store/atoms.tsx";

// Define an interface for the items stored in each atom
interface Item {
  id: string;
  label: string;
  selected: boolean;
}

export default function FilterComponent() {
  const [location, setLocation] = useRecoilState<Item[]>(locations);
  const [interest, setInterest] = useRecoilState<Item[]>(interests);
  const [field, setField] = useRecoilState<Item[]>(fields);
  const [expectedHour, setExpectedHour] = useRecoilState<Item[]>(expectedHours);

  const handleCheckedChangeLocation = (checked: any, id: string) => {
    setLocation((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: checked } : item
      )
    );
    console.log(location);
  };

  const handleCheckedChangeInterest = (checked: any, id: string) => {
    setInterest((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: checked } : item
      )
    );
    console.log(interest);
  };

  const handleCheckedChangeField = (checked: any, id: string) => {
    setField((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: checked } : item
      )
    );
    console.log(field);
  };

  const handleCheckedChangeExpectedHours = (checked: any, id: string) => {
    setExpectedHour((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: checked } : item
      )
    );
    console.log(expectedHour);
  };

  return (
    <div className="w-[200px] rounded-md p-4 bg-white/70">
      <b className="flex items-center space-x-2">Lokasjon</b>
      {location.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            checked={item.selected}
            onCheckedChange={(checked) => {
              handleCheckedChangeLocation(checked, item.id);
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}

      <b className="flex items-center space-x-2">Interesse</b>
      {interest.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            checked={item.selected}
            onCheckedChange={(checked) => {
              handleCheckedChangeInterest(checked, item.id);
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}

      <b className="flex items-center space-x-2">Fagområder</b>
      {field.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            checked={item.selected}
            onCheckedChange={(checked) => {
              handleCheckedChangeField(checked, item.id);
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}

      <b className="flex items-center text-left space-x-2">
        Antall forventet timer i uka
      </b>
      {expectedHour.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <Checkbox
            checked={item.selected}
            onCheckedChange={(checked) => {
              handleCheckedChangeExpectedHours(checked, item.id);
            }}
          />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}
