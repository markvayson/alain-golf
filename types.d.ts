interface EventType {
  id: number;
  name: string;
  type: string;
  mode: string;
  description: string;
  status: string;
  date: string;
  holes: number;
  image: string;
  hasJoined: boolean;
}

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
