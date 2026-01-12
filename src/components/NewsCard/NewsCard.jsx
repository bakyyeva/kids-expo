import './NewsCard.css'

export default function NewsCard({ image, date, title }) {
  return (
    <article className="news-card">
      <div className="news-card-media">
        <img src={image} alt="news" className="img-fluid rounded" />
      </div>
      <div className="news-card-body">
        <small className="text-muted d-block mb-2">{date}</small>
        <h6 className="news-card-title">{title}</h6>
      </div>
    </article>
  )
}
