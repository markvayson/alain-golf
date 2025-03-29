import { Facebook, Instagram, Logo, WhatsApp } from "@/components/Svg";
import { JSX, ReactNode } from "react";

export const sampleEvents = [
  {
    id: 1,
    name: "Brighton College Club Championship",
    type: "shotgun",
    mode: "individual strokeplay",
    description: "just a typical description",
    status: "upcoming",
    date: "15 & 16 March 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?golf",
    hasJoined: true,
  },
  {
    id: 2,
    name: "AESGC Monthly Medal",
    type: "tee time",
    mode: "individual stableford",
    description: "monthly competition for club members",
    status: "ongoing",
    date: "5 April 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?golf-course",
    hasJoined: true,
  },
  {
    id: 3,
    name: "Summer Scramble",
    type: "shotgun",
    mode: "team scramble",
    description: "fun summer event with teams",
    status: "completed",
    date: "20 June 2025",
    holes: 9,
    image: "https://source.unsplash.com/random/800x600/?summer",
    hasJoined: false,
  },
  {
    id: 4,
    name: "Junior Golf Open",
    type: "tee time",
    mode: "individual strokeplay",
    description: "event for junior golfers",
    status: "upcoming",
    date: "12 July 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?kids-golf",
    hasJoined: false,
  },
  {
    id: 5,
    name: "Ladies Night Out",
    type: "shotgun",
    mode: "individual stableford",
    description: "casual evening event for women",
    status: "upcoming",
    date: "25 August 2025",
    holes: 9,
    image: "https://source.unsplash.com/random/800x600/?ladies-golf",
    hasJoined: false,
  },
  {
    id: 6,
    name: "Club Championship Finals",
    type: "tee time",
    mode: "match play",
    description: "final round of the club championship",
    status: "upcoming",
    date: "30 September 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?championship",
    hasJoined: false,
  },
  {
    id: 7,
    name: "Night Golf Challenge",
    type: "shotgun",
    mode: "individual strokeplay",
    description: "fun night event with glow-in-the-dark balls",
    status: "upcoming",
    date: "15 October 2025",
    holes: 9,
    image: "https://source.unsplash.com/random/800x600/?night-golf",
    hasJoined: false,
  },
  {
    id: 8,
    name: "Charity Golf Day",
    type: "tee time",
    mode: "team best ball",
    description: "fundraising event for local charities",
    status: "upcoming",
    date: "5 November 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?charity-golf",
    hasJoined: false,
  },
  {
    id: 9,
    name: "Thanksgiving Tournament",
    type: "shotgun",
    mode: "individual stableford",
    description: "celebrate the holiday with some golf",
    status: "upcoming",
    date: "25 November 2025",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?thanksgiving-golf",
    hasJoined: false,
  },
  {
    id: 10,
    name: "New Year’s Kickoff",
    type: "tee time",
    mode: "individual strokeplay",
    description: "start the new year with a round of golf",
    status: "upcoming",
    date: "1 January 2026",
    holes: 18,
    image: "https://source.unsplash.com/random/800x600/?newyear-golf",
    hasJoined: false,
  },
];

export const FIELD_NAMES = {
  fullName: "Full name",
  email: "Email",
  ghinNumber: "Ghin Number",
  password: "Password",
};

export const CONTACT_FIELD_NAMES = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phoneNumber: "Phone Number",
  comment: "Comment",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  ghinNumber: "number",
  password: "password",
};

export const golfButtons = [
  { label: "Check Tee Time Availability", isDialog: true },
  { label: "Join Events", isDialog: true },
  { label: "Green Fee Rates", isDialog: true },
  { label: "Lesson Rates", isDialog: true },
  { label: "Become a Member", isDialog: true },
];

export const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Team", href: "#team" },
  { name: "Contact Us", href: "#contactus" },
];

export const mobileCourseTypes = [
  "Championship Course Weekdays",
  "Championship Course Weekends",
  "Championship Course Holidays",
  "Academy Course Weekdays",
  "Academy Course Weekends",
  "Academy Course Holidays",
];

export const golfClubSections: SectionProps[] = [
  {
    title: "⛳ 18-Hole Championship Course",
    description:
      "Play on our beautifully designed 18-hole championship course, with options for a full round or a quick 9-hole game. Carts and walking options available.",
    checklist: [
      "18-hole & 9-hole options",
      "Carts or walking available",
      "Members & guests welcome",
      "Tee times available online",
      "Play casually or competitively",
      "Scenic course views",
      "Golf restaurant available",
    ],
  },
  {
    title: "🎯 9-Hole Par 3 Academy Course",
    description:
      "A beginner-friendly short course designed for learning and improving precision. Open to all skill levels, our Par 3 series is a fun and low-pressure way to enjoy the game.",

    checklist: [
      "For all skill levels",
      "Handful Events",
      "Rent clubs if needed",
      "Learn golf etiquette",
      "Guided play available",
    ],
  },
  {
    title: "🏌️‍♂️ Driving Range",
    description:
      "Practice your long game and work on your swing at our outdoor driving range. Open to everyone, no reservations required.",

    checklist: [
      "Open to members & guests",
      "Solo or group practice",
      "Target-based sessions",
      "Balls available at range",
      "Coaching services offered",
      "Improve distance & accuracy",
    ],
  },
];
