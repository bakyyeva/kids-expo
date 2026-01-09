import Button from '../Button'
import './info-card.css'

export default function InfoCard({ image, title, text, buttonLabel = 'Скачать' }) {
  return (
    <div className="info-card position-relative overflow-hidden">
      <img src={image} className="info-card-bg" />
      <div className="info-card-content p-3 p-md-4">
        <h5 className="fw-bold text-white mb-3">{title}</h5>
        <p className="text-white small mb-3">{text}</p>
        <Button variant="outline" className="btn-sm btn-purple-outline-border0 d-flex align-items-center gap-2">
            <span className="material-symbols-outlined">download</span>
           {buttonLabel}
        </Button>
      </div>
    </div>
  )
}

