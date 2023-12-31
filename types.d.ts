type User = {
  role: "basic" | "admin";
  id?: string;
  nom: string;
  prenom: string;
  tel: string;
  mail: string;
  password: string;
  tampons: string;
};

type Article = {
  id?: string;
  nom: string;
  prix: number;
  image: string;
};

type Paiement = {
  id?: string;
  user: string;
  vendeur: string | null;
  articles: string[];
  montant: number;
  envoi: string;
  validation: string;
};

type Presence = {
  id?: string;
  user: string;
  debut: string;
  fin: string | null;
};

type TotalPaiement = {
  user: string;
  total: number;
};
