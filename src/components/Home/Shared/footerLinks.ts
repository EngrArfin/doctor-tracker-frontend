import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
export const jobSeekersLinks = [
  { label: "Browse Jobs", to: "/jobs" },
  { label: "Create Profile", to: "/signup" },
  // { label: "Career Resources", to: "/resources" },
  // { label: "FAQs", to: "/faqs" },
  { label: "Create CV", to: "/create-cv" },
];

export const employersLinks = [
  { label: "Post a Job", to: "/owner-dashboard/my-jobs/create" },
  { label: "Find Workers", to: "/owner-dashboard/all-applicant" },
  { label: "Pricing Plans", to: "/pricing" },
  // { label: "Success Stories", to: "/success-stories" },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];
export const socialLinks = [
  { href: "https://www.facebook.com/", icon: LuFacebook, label: "Facebook" },
  { href: "https://x.com/", icon: FiTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/feed/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "https://www.instagram.com/", icon: FaInstagram, label: "Instagram" },
];
