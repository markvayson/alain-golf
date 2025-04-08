

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  ghinNumber: number;
}

interface SectionProps {
  title: string;
  description: string;
  checklist: string[];
}

interface GolfButtonProps {
  label: string;
  isDialog: boolean;
  link?: string;
}

interface Rate {
  id: string;
  courseType: string;
  category: string;
  weekday9h: number;
  weekday18h: number;
  weekend9h: number;
  weekend18h: number;
}

type Pricing = {
  full_year: number;
  pro_rata: Record<string, number>;
};

type MembershipOption = {
  title: string;
  pricing: Pricing;
};

type MembershipCategory = {
  category: string;
  description: string;
  benefits: string[];
  options: MembershipOption[];
};

type EventType = {
  name: string;
  description: string;
  date: string;
  course: string;
  holes: number;
  method: string;
  link: string;
  format: string;
  visitorsCanJoin: boolean;
}




type Person = {
  name: string;
  role: string;
  link: string;
  avatar?: string | imageData;
};
