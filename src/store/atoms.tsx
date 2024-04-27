import { atom } from "recoil";

export const locations = atom({
  key: "location",
  default: [
    { id: "oslo", label: "Oslo", selected: false },
    { id: "bergen", label: "Bergen", selected: false },
    { id: "trondheim", label: "Trondheim", selected: false },
    { id: "tromso", label: "Tromsø", selected: false },
  ],
});

export const interests = atom({
  key: "interest",
  default: [
    { id: "markedsføring", label: "Markedsføring", selected: false },
    { id: "salg", label: "Salg", selected: false },
    { id: "design", label: "Design", selected: false },
    { id: "utvikling", label: "Utvikling", selected: false },
    { id: "prosjektledelse", label: "Prosjektledelse", selected: false },
    { id: "økonomi", label: "Økonomi", selected: false },
    { id: "sosialt", label: "Sosialt", selected: false },
    { id: "sosiale medier", label: "Sosiale medier", selected: false },
  ],
});

export const fields = atom({
  key: "field",
  default: [
    { id: "ai", label: "AI", selected: false },
    { id: "entreprenørskap", label: "Entreprenørskap", selected: false },
    { id: "servering", label: "Servering", selected: false },
    { id: "næringsliv", label: "Næringsliv", selected: false },
    { id: "finans", label: "Finans", selected: false },
    { id: "ingeniør", label: "Ingeniør", selected: false },
    { id: "data", label: "Data", selected: false },
  ],
});

export const expectedHours = atom({
  key: "expectedHours",
  default: [
    { id: "1-10", label: "1-10 timer", selected: false },
    { id: "11-20", label: "11-20 timer", selected: false },
    { id: "20+", label: "20+ timer", selected: false },
  ],
});
