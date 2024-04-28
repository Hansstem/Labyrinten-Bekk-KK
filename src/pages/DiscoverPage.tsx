import React, { useEffect, useState } from "react";
import VervList from "@/components/VervList";
import data from "../assets/data.js";
import FilterComponent from "@/components/FilterComponent.js";
import { useRecoilValue } from "recoil";
import {
  locations,
  interests,
  fields,
  expectedHours,
} from "../store/atoms.tsx";

export default function DiscoverPage() {
  const [vervData, setVervData] = useState(data);
  const selectedLocations = useRecoilValue(locations).filter(
    (loc) => loc.selected
  );
  const selectedInterests = useRecoilValue(interests).filter(
    (int) => int.selected
  );
  const selectedFields = useRecoilValue(fields).filter(
    (field) => field.selected
  );
  const selectedHours = useRecoilValue(expectedHours).filter(
    (hour) => hour.selected
  );

  useEffect(() => {
    const filteredData = data.filter((verv: { categories: any[] }) => {
      console.log(selectedLocations);
      return (
        selectedLocations.every((location) => {
          return (
            verv.categories.find((cat) => cat.category_name === "Location")
              ?.value === location.label
          );
        }) &&
        selectedInterests.every((interest) => {
          return verv.categories
            .find((cat) => cat.category_name === "Interest")
            ?.value.includes(interest.id);
        }) &&
        selectedFields.every((field) => {
          return verv.categories
            .find((cat) => cat.category_name === "Field")
            ?.value.includes(field.id);
        }) &&
        selectedHours.every((hour) => {
          if (hour.id === "20+") {
            return (
              parseInt(
                verv.categories.find(
                  (cat) => cat.category_name === "Hours Per Week"
                )?.value
              ) >= 20
            );
          }
          const bounds = hour.id.split("-");
          return (
            parseInt(
              verv.categories.find(
                (cat) => cat.category_name === "Hours Per Week"
              )?.value
            ) >= parseInt(bounds[0]) &&
            parseInt(
              verv.categories.find(
                (cat) => cat.category_name === "Hours Per Week"
              )?.value
            ) <= parseInt(bounds[1])
          );
        })
      );
    });
    setVervData(filteredData);
  }, [
    selectedLocations.length,
    selectedInterests.length,
    selectedFields.length,
    selectedHours.length,
  ]);

  return (
    <div className="flex flex-row pt-6">
      <div className="max-w-max">
        <FilterComponent />
      </div>
      <div className="flex-1 min-w-min">
        <VervList vervList={vervData} />
      </div>
    </div>
  );
}
