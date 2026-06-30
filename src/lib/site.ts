import {
  Shield,
  Dumbbell,
  Bone,
  Briefcase,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Upward Physio and Performance",
  shortName: "Upward",
  tagline: "Move Better. Feel Stronger. Live Higher.",
  description:
    "Movement-focused physical therapy, strength & conditioning, occupational health, and workplace wellness in Denver. Led by DJ Keim, DPT, CSCS.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://upwardphysio.com",
  location: "Denver, Colorado",
  email: "dj@upwardphysio.com",
  phone: "(720) 555-0148",
  founder: {
    name: "DJ Keim",
    credentials: "DPT, CSCS",
    role: "Doctor of Physical Therapy · Founder",
    // Studio portrait used on the home/index page.
    headshot: "/images/daniel-headshot.webp",
    // Polo/garden portrait — DJ's "professional" headshot.
    portrait: "/images/dj-portrait-polo.webp",
    // Hat-on-the-mountain shot — DJ's personal "Colorado vibe" image, used in the About section.
    coloradoPortrait: "/images/dj-colorado.webp",
  },
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * DJ's four "avenues" — separate landing pages, ONE brand.
 * (Per his note: separate landing pages instead of separate branding.)
 */
export type Avenue = {
  slug: string;
  name: string; // e.g. "Upward Physio"
  kicker: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  highlights: string[];
};

export const avenues: Avenue[] = [
  {
    slug: "physio",
    name: "Upward Physio",
    kicker: "Physical Therapy & Orthopedics",
    title: "Get out of pain. Stay out of pain.",
    blurb:
      "One-on-one, movement-focused physical therapy for orthopedic injuries, post-op recovery, and stubborn aches. Targeted exercise and education first, hands-on techniques when they help.",
    href: "/services/physio",
    image: "/images/dj-manual-therapy.webp",
    imageAlt:
      "DJ Keim performing hands-on manual therapy on a patient's arm in a bright treatment room",
    icon: Bone,
    highlights: [
      "Orthopedic & post-surgical rehab",
      "Manual therapy & dry-needling-style techniques",
      "Home exercise programs that actually fit your life",
      "Direct access — no referral required in Colorado",
    ],
  },
  {
    slug: "performance",
    name: "Upward Performance",
    kicker: "Strength & Conditioning",
    title: "Train with purpose. Build a resilient body.",
    blurb:
      "Bridge the gap between rehab and the gym. As a Certified Strength & Conditioning Specialist, DJ programs strength work that keeps you durable, capable, and confident under load.",
    href: "/services/performance",
    image: "/images/dj-gym-session.webp",
    imageAlt:
      "DJ Keim coaching an older adult through a seated mobility exercise in a gym with dumbbells",
    icon: Dumbbell,
    highlights: [
      "CSCS-designed strength programming",
      "Return-to-sport & return-to-lifting",
      "Movement screens & performance testing",
      "Progressive loading for long-term durability",
    ],
  },
  {
    slug: "work",
    name: "Upward Work",
    kicker: "Occupational Health",
    title: "Keep your workforce healthy and on the job.",
    blurb:
      "On-site and preventative therapy built for employers. DJ launched the first preventative therapy program for Metro (WMATA) transit employees — now he brings that model to your team.",
    href: "/services/work",
    image: "/images/dj-presenting.webp",
    imageAlt:
      "DJ Keim presenting on physical therapy in transit operations to a corporate audience",
    icon: Briefcase,
    highlights: [
      "On-site injury prevention & early intervention",
      "Ergonomic & job-task assessments",
      "Reduced workers' comp claims and lost time",
      "Built from a real transit-agency program",
    ],
  },
  {
    slug: "wellness",
    name: "Upward Wellness",
    kicker: "Workplace & Lifestyle Wellness",
    title: "Build healthy movement into everyday life.",
    blurb:
      "Education-first wellness for teams and individuals — mobility, posture, and habit coaching that lowers injury risk and helps people feel better at work and at home.",
    href: "/services/wellness",
    image: "/images/dj-resistance-band.webp",
    imageAlt:
      "DJ Keim guiding a client through a resistance-band shoulder exercise",
    icon: HeartPulse,
    highlights: [
      "Movement & mobility workshops",
      "Posture and desk-setup coaching",
      "Habit-based pain prevention",
      "Group classes & lunch-and-learns",
    ],
  },
];

/** Five specialties for the services overview / icons (matches the brief). */
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const services: Service[] = [
  {
    title: "Occupational Health",
    description:
      "On-site and preventative care that keeps employees moving and reduces injury-related downtime.",
    icon: Briefcase,
    href: "/services/work",
  },
  {
    title: "Strength & Conditioning",
    description:
      "CSCS-led programming that turns rehab gains into lasting, real-world strength.",
    icon: Dumbbell,
    href: "/services/performance",
  },
  {
    title: "Orthopedics",
    description:
      "Expert rehab for joints, muscles, and post-surgical recovery — built around how you move.",
    icon: Bone,
    href: "/services/physio",
  },
  {
    title: "Injury Prevention",
    description:
      "Screens, education, and targeted strength work that stop injuries before they start.",
    icon: Shield,
    href: "/services/wellness",
  },
  {
    title: "Workplace Wellness",
    description:
      "Workshops, ergonomic coaching, and habits that help whole teams feel and perform better.",
    icon: HeartPulse,
    href: "/services/wellness",
  },
];

/** Trust signals. (DJ said he'll send real numbers later — placeholders flagged.) */
export const stats = [
  { value: "1st", label: "Preventative PT program built for WMATA transit" },
  { value: "8+", label: "Years treating ortho, sports & occupational patients" },
  { value: "DPT", label: "Doctorate from Washington University in St. Louis" },
  { value: "CSCS", label: "Certified Strength & Conditioning Specialist" },
];

export const testimonials = [
  {
    quote:
      "DJ found the root cause of my shoulder pain in one session after months of guessing elsewhere. The home program was simple and it actually worked.",
    name: "Outpatient patient",
    detail: "Orthopedic rehab",
    type: "Individual",
  },
  {
    quote:
      "Our lost-time injuries dropped noticeably after bringing on-site therapy to our crews. The early-intervention approach paid for itself.",
    name: "Operations Director",
    detail: "Transit & logistics employer",
    type: "Corporate",
  },
  {
    quote:
      "He treats you like an athlete no matter your age. I'm lifting again and moving better than I have in a decade.",
    name: "Performance client",
    detail: "Return-to-lifting",
    type: "Individual",
  },
];

export const corporateBenefits = [
  {
    title: "Lower workers' comp costs",
    description:
      "Early intervention catches strains before they become expensive claims and lost workdays.",
  },
  {
    title: "Less absenteeism",
    description:
      "On-site access means employees get help fast and stay productive instead of sitting at home.",
  },
  {
    title: "Higher productivity",
    description:
      "Healthier, more mobile workers move better and perform better through the whole shift.",
  },
  {
    title: "Ergonomic assessments",
    description:
      "Job-task and workstation evaluations that target the real drivers of musculoskeletal risk.",
  },
  {
    title: "On-site programs",
    description:
      "Recurring on-site therapy and screening tailored to the physical demands of your workforce.",
  },
  {
    title: "Proven model",
    description:
      "Built on the first preventative therapy program launched for WMATA transit employees.",
  },
];
