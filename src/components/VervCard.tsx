import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

type VervCardProps = {
  logo: string;
  name: string;
  description: string;
  link: string;
  accentColor: string;
};

export default function VervCard({
  logo,
  name,
  description,
  link,
  accentColor,
}: VervCardProps) {
  const navigate = useNavigate();
  return (
    <Card className="max-w-md rounded-xl overflow-hidden shadow-lg flex flex-col justify-between h-full">
  <CardHeader>
    <img
      src={"/public/logos/" + logo}
      alt="Logo"
      className="rounded-t-lg object-contain h-20 self-baseline"
    />
  </CardHeader>
  <CardContent className="text-left">
    <CardTitle className="pb-4">{name}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContent>
  
  <Button
    onClick={() => navigate(link)}
    className="mb-0 mt-auto flex self-stretch rounded-b-lg justify-center"
    style={{ backgroundColor: accentColor }}
  >
    Vis mer om vervet
  </Button>
</Card>
  );
}
