import './ThemeCard.css'

export default function ThemeCard({ icon, title }) {
  return (
    <div className="theme-card h-100">
      <div className="theme-card-icon mb-5">
        <img src={icon} />
      </div>
      <h5 className="theme-card-title mb-4">{title}</h5>
    </div>
  )
}
