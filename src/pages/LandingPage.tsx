import React from "react";
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

export default function LandingPage() {
  return (
    <div className="pt-8">
      <Card className="flex justify-between w-[750px]">
        <img className="w-[350px]" src={frontIllustration} alt="frontIllustration" />
        <div>
  <CardHeader>
    <CardTitle className="text-left">Finn det <b>perfekte</b> vervet for deg</CardTitle>
  </CardHeader>
  <CardContent className="flex justify-between text-left">
  <p>Bla igjennom alle verv tiljengelige på ditt studiested, og filtrer på arbeidsmengde, oppgaver og fagområde</p>
  </CardContent>
  {/* Place footer on the right side */}
  <CardFooter className="flex justify-end">
    <Button> Utforsk</Button>
  </CardFooter>
  </div>
  
</Card>




{/* Three cards of width 300 that places themselves dynamically, to fill the width of the screen (dynamic spacing and amount in a row) */}
{/* Make sure to strech the padding between them */}

<div className="flex justify-between pt-8 w-[750px]">
  
  <Card className="flex justify-between w-[220px]">
    <CardHeader className="flex-row justify-between gap-2">
      <CardTitle className="text-4xl font-bold">357</CardTitle>
      {/* TODO: Fix align-middle */}
      <CardDescription className="text-sm pt-2 align-middle font-bold text-black">Undergrupper</CardDescription>
    </CardHeader>
  </Card>


  <Card className="flex justify-between w-[220px]">
    <CardHeader className="flex-row justify-between gap-2">
      <CardTitle className="text-4xl font-bold">56</CardTitle>
      {/* TODO: Fix align-middle */}
      <CardDescription className="text-sm pt-2 align-middle font-bold text-black">Organisasjoner</CardDescription>
    </CardHeader>
  </Card>


  <Card className="flex justify-between w-[220px]">
    <CardHeader className="flex-row justify-between gap-2">
      <CardTitle className="text-4xl font-bold">7</CardTitle>
      {/* TODO: Fix align-middle */}
      <CardDescription className="text-sm pt-2 align-middle font-bold text-black">Studiesteder</CardDescription>
    </CardHeader>
  </Card>

    </div>

    <div className="flex justify-between pt-8 w-[750px]">

    <Card className="flex justify-between w-[350px]">
    <CardHeader className="gap-2">
      <CardTitle>Ideen bak VervMeg</CardTitle>
     
      <CardDescription>VervMeg ble startet av fire studenter ved NTNU, da vi så hvor vanskelig det var å sette seg inn i alle de ulike mulighetene man har som student, særlig som ny på et studie. Ved å samle alle vervene på ett sted, og ha muligheten til å filtrere dem ut i fra dine interesser og kunnskaper, håper vi det vil bli lettere for deg å finne ditt drømmeverv!</CardDescription>
    </CardHeader>
  </Card>

  <Card className="flex justify-between w-[350px]">
    <CardHeader className="gap-2">
      <CardTitle>Hvorfor søke verv?</CardTitle>
     
      <CardDescription>Å ha et frivillig verv ved siden av studiet vil gi deg muligheten til å utforske dine interesser og bygge ny kunnskap. Det er også en utrolig god sosial arena for å få nye venner, gjerne med like interesser som deg! Sist men ikke minst vil det også være gunstig å kunne vise til engasjement ved siden av studiet til din fremtidige arbeidsgiver.</CardDescription>
    </CardHeader>
  </Card>



    </div>

    </div>
  );
}


