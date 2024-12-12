import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Cette plateforme a révolutionné notre équipe. Nous pouvons désormais suivre la productivité en temps réel, et les informations obtenues nous aident à prendre de meilleures décisions de gestion.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "La capacité de l'outil à gérer la performance des employés et à rationaliser le flux de travail est inestimable. Il a considérablement amélioré l'efficacité de notre équipe.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Notre équipe est plus productive que jamais. L'interface intuitive de la plateforme et ses puissantes analyses ont rendu le suivi et l'amélioration de la performance beaucoup plus simples.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Utiliser cette plateforme nous a permis d'optimiser nos flux de travail et de suivre la productivité des employés avec facilité. Les résultats parlent d'eux-mêmes.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Nous avons pu acquérir une meilleure compréhension de la performance des employés, ce qui a directement conduit à une augmentation de l'efficacité dans tous les domaines. Hautement recommandé !",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "L'équipe a fait un travail fantastique en développant cette plateforme. Elle a simplifié la gestion des employés et amélioré la productivité globale grâce à un suivi sans faille.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Insights Automatisés",
    description:
      "Prenez des décisions basées sur les données grâce à un tableau de bord puissant qui suit la performance et l'assiduité des employés sans effort.",
  },
  {
    icon: <Fingerprint />,
    text: "Accès Sécurisé",
    description:
      "Assurez la protection des données de votre équipe avec des protocoles de sécurité robustes et une compatibilité multi-plateforme.",
  },
  {
    icon: <ShieldHalf />,
    text: "Flux de Travail Personnalisables",
    description:
      "Adaptez le système à vos besoins spécifiques grâce à des modèles faciles à utiliser et une interface de type glisser-déposer.",
  },
  {
    icon: <BatteryCharging />,
    text: "Mises à Jour en Temps Réel",
    description:
      "Surveillez les indicateurs de productivité en direct, permettant aux gestionnaires de prendre des décisions éclairées instantanément.",
  },
  {
    icon: <PlugZap />,
    text: "Outils de Collaboration en Équipe",
    description:
      "Facilitez la communication et le travail d'équipe entre les départements avec des fonctionnalités de collaboration intégrées.",
  },
  {
    icon: <GlobeLock />,
    text: "Accessibilité Mondiale",
    description:
      "Gérez votre main-d'œuvre où que vous soyez, à tout moment, avec une fonctionnalité multiplateforme et des interfaces intuitives.",
  },
];


export const checklistItems = [
  {
    title: "Suivi des performances simplifié",
    description:
      "Surveillez et analysez la productivité des employés en temps réel avec des indicateurs intuitifs et des informations exploitables.",
  },
  {
    title: "Gestion des tâches simplifiée",
    description:
      "Attribuez, suivez et gérez les tâches facilement, en garantissant que votre équipe reste sur la bonne voie et atteigne ses objectifs.",
  },
  {
    title: "Efficacité pilotée par l'IA",
    description:
      "Exploitez des outils alimentés par l'IA pour optimiser les flux de travail et réduire le temps passé sur des tâches répétitives, améliorant ainsi l'efficacité globale de l'équipe.",
  },
  {
    title: "Collaboration instantanée",
    description:
      "Partagez les mises à jour et collaborez avec votre équipe en temps réel pour garantir une prise de décision rapide et une réalisation plus rapide des projets.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
