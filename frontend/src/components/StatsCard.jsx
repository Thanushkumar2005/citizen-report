import { FaUsers } from "react-icons/fa";
import "./../styles/StatsCard.css";

function StatsCard({ title, subtitle, value }) {
  return (
    <div className="stats-card">
      <FaUsers size={42} />
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <h2>{value}</h2>
    </div>
  );
  
}

export default StatsCard;