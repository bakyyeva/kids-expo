import './stat-card.css'

export default function StatCard({ value, label }) {
  return (
    <div className="stat-card p-2 p-md-3 d-flex flex-column align-items-start">
      <div className="stat-value">{value}</div>
      <div className="stat-label small">{label}</div>
    </div>
  )
}
