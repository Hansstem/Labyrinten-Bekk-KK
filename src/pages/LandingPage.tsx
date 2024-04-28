import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {Button} from "../components/ui/button"
import frontIllustration from "../assets/frontIllustration.svg"
import pils from "../assets/trott.png"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-10">
      {/* START køddekort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
        <div className="flex-1">
          <Card className="flex p-8 shadow-lg rounded-2xl">
            <h1 className="text-6xl">
              <span className="text-red-500">K</span>
              <span className="text-orange-500">o</span>
              <span className="text-yellow-500">m</span>
              <span className="text-green-500">p</span>
              <span className="text-blue-500">l</span>
              <span className="text-indigo-500">e</span>
              <span className="text-purple-500">t</span>
              <span className="text-pink-500">t</span>
              <span className="text-red-500"> </span>
              <span className="text-orange-500">s</span>
              <span className="text-yellow-500">p</span>
              <span className="text-green-500">i</span>
              <span className="text-blue-500">l</span>
              <span className="text-indigo-500">l</span>
              <span className="text-purple-500">e</span>
              <span className="text-pink-500">r</span>
              <span className="text-red-500">.</span>
            </h1>
          </Card>
        </div>
      </div>
      {/* END køddekort */}
      {/* Main Feature Card */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex-1">
          <Card className="flex flex-row p-8 shadow-lg rounded-2xl">
            <img className="w-full md:w-1/2 lg:w-1/3" src={frontIllustration} alt="Front Illustration" />
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-left">Finn det <b>perfekte</b> vervet for deg</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p>Bla igjennom alle verv tiljengelige på ditt studiested, og filtrer på arbeidsmengde, oppgaver og fagområde</p>
              </CardContent>
              <CardFooter className="flex justify-end pt-32">
                <Button onClick={() => navigate('/discover')}> Utforsk</Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>

      {/* Statistic Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-4xl font-bold">357</CardTitle>
            <CardDescription className="text-sm align-middle font-bold text-black">Undergrupper</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-4xl font-bold">56</CardTitle>
            <CardDescription className="text-sm align-middle font-bold text-black">Organisasjoner</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-4xl font-bold">7</CardTitle>
            <CardDescription className="text-sm align-middle font-bold text-black">Studiesteder</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Additional Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>Ideen bak VervMeg</CardTitle>
            <CardDescription>VervMeg ble startet av fire studenter ved NTNU, da vi så hvor vanskelig det var å sette seg inn i alle de ulike mulighetene man har som student, særlig som ny på et studie. Ved å samle alle vervene på ett sted, og ha muligheten til å filtrere dem ut i fra dine interesser og kunnskaper, håper vi det vil bli lettere for deg å finne ditt drømmeverv!</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle>Hvorfor søke verv?</CardTitle>
            <CardDescription>Å ha et frivillig verv ved siden av studiet vil gi deg muligheten til å utforske dine interesser og bygge ny kunnskap. Det er også en utrolig god sosial arena for å få nye venner, gjerne med like interesser som deg! Sist men ikke minst vil det også være gunstig å kunne vise til engasjement ved siden av studiet til din fremtidige arbeidsgiver.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
