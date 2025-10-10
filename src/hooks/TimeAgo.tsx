import { formatDistanceToNow } from "date-fns";

type Props = {
  timestamp: string | Date;
};

const TimeAgo = ({ timestamp }: Props) => {
  return (
    <span>{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</span>
  );
};

export default TimeAgo;
