export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  status?: "accepted" | "declined";
  created: {
    date: string;
    name: string;
    email: string;
  };
}
