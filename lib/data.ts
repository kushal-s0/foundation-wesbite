import {
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards
} from "lucide-react";
import type { GalleryImage, Program, Stat } from "@/types";

export const stats: Stat[] = [
  { label: "Children Supported", value: 3200, suffix: "+" },
  { label: "Volunteers", value: 450, suffix: "+" },
  { label: "Communities Reached", value: 85, suffix: "+" },
  { label: "Projects Completed", value: 140, suffix: "+" }
];

export const homePrograms: Program[] = [
  {
    title: "Education Support",
    description: "Learning resources, mentoring, and classroom support for children who need a stronger start.",
    icon: BookOpen
  },
  {
    title: "Women Empowerment",
    description: "Confidence, financial literacy, and leadership programs designed with women and girls.",
    icon: Sparkles
  },
  {
    title: "Skill Development",
    description: "Practical training pathways that help youth and families move toward sustainable livelihoods.",
    icon: Lightbulb
  },
  {
    title: "Community Welfare",
    description: "Health, awareness, and relief initiatives shaped around local community needs.",
    icon: HandHeart
  }
];

export const programs: Program[] = [
  {
    title: "Education Initiatives",
    description: "After-school learning, book drives, digital literacy, and support for first-generation learners.",
    icon: BookOpen
  },
  {
    title: "Scholarship Programs",
    description: "Financial assistance and mentorship for students with promise and limited resources.",
    icon: GraduationCap
  },
  {
    title: "Women Empowerment",
    description: "Workshops, peer circles, and livelihood support to expand agency and opportunity.",
    icon: Users
  },
  {
    title: "Healthcare Awareness",
    description: "Community sessions on preventive care, hygiene, nutrition, and mental well-being.",
    icon: HeartPulse
  },
  {
    title: "Environmental Campaigns",
    description: "Clean-up drives, tree planting, and local campaigns that build greener neighborhoods.",
    icon: Leaf
  },
  {
    title: "Community Development",
    description: "Relief support, civic awareness, and partnerships that strengthen local resilience.",
    icon: ShieldCheck
  }
];

export const values = [
  "Compassion with accountability",
  "Dignity for every community member",
  "Transparent, impact-focused action",
  "Inclusive opportunity and local leadership"
];

export const timeline = [
  {
    year: "2018",
    title: "Grassroots Beginning",
    text: "A volunteer-led effort began supporting children with learning material and mentoring."
  },
  {
    year: "2020",
    title: "Community Relief",
    text: "The foundation expanded into food, health, and awareness drives during urgent local needs."
  },
  {
    year: "2022",
    title: "Skills and Livelihoods",
    text: "Structured programs for women, youth, and families brought training closer to communities."
  },
  {
    year: "2026",
    title: "Scaled Partnerships",
    text: "Nayepankh continues to grow with coordinators, volunteers, and partner-led projects."
  }
];

export const team = [
  {
    name: "Foundation Founder",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Volunteer Network",
    role: "Volunteers",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Program Coordinators",
    role: "Coordinators",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  }
];

export const testimonials = [
  {
    quote: "The mentoring sessions helped our students return to learning with confidence and joy.",
    name: "Community Teacher"
  },
  {
    quote: "Volunteering here feels organized, meaningful, and connected to real local needs.",
    name: "Youth Volunteer"
  },
  {
    quote: "The skill workshops helped women in our area see new ways to earn and lead.",
    name: "Program Participant"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
    alt: "Children studying together",
    height: "h-72"
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers arranging community supplies",
    height: "h-96"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    alt: "Community education activity",
    height: "h-80"
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
    alt: "Smiling child at outreach event",
    height: "h-72"
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
    alt: "Hands joining in support",
    height: "h-96"
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    alt: "Food and welfare support drive",
    height: "h-80"
  }
];

export const faqs = [
  {
    question: "How can I volunteer with Nayepankh Foundation?",
    answer: "Submit the volunteer form with your city, skills, and availability. Our team will contact you when there is a suitable opportunity."
  },
  {
    question: "Can I support a specific program?",
    answer: "Yes. Donors and partners can direct support toward education, women empowerment, health awareness, or community welfare initiatives."
  },
  {
    question: "Does the foundation work with local partners?",
    answer: "Yes. Local schools, community leaders, coordinators, and volunteers help us shape programs around real needs."
  }
];

export const donationOptions = [
  { icon: WalletCards, label: "Donate securely" },
  { icon: Users, label: "Sponsor a program" },
  { icon: HandHeart, label: "Join a drive" }
];
