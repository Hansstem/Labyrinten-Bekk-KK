import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

type VervCardProps = {
    logo: string,
    name: string
    description: string,
    link: string,
    accentColor: string,
};


export default function VervCard({logo, name, description, link, accentColor}: VervCardProps) {
    const navigate = useNavigate();
  return (
    <Card className="max-w-md rounded-xl overflow-hidden shadow-lg">
      <CardHeader>
        <img src={logo} alt="Logo" className="w-1/2 h-1/4 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="text-left">
        <CardTitle className="pb-4">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => navigate(link)} className="w-1/2" style={{ backgroundColor: accentColor }} 
                >Vis mer om vervet</Button>
      </CardFooter>
    </Card>
  );
};

