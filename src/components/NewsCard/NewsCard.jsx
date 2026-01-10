import './news-card.css'

export default function NewsCard({ image, date, title }) {
  return (
    <div className="card news-card h-100">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <div className="text-muted small mb-2">{date}</div>
        <h6 className="card-title fw-semibold">{title}</h6>
      </div>
    </div>
  )
}
