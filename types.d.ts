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
