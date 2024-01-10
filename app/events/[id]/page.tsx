import { PageProps } from "@/models";

const Event = ({ params }: PageProps) => {
  const { id } = params;

  return <div>Event - {id}</div>;
};

export default Event;
