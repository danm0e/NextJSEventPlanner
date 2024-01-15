export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  status?: "Accepted" | "Declined";
  date: string;
  name: string;
  email: string;
}
