import './TimeCard.css'

export default function TimeCard({ title, dateRange, email }) {
  return (
    <div>
        <div className="time-card h-100">
        <div className="time-card-header">
            {title}
        </div>
        <div className="time-card-body">
            <p className="time-card-date">{dateRange}</p>
        </div>
        </div>
        <div className="time-card-email d-flex align-items-center justify-content-center gap-2 mt-5">
          <span className="material-symbols-outlined fs-1 mail-icon">mail</span>
          <div>
            <small className="d-block text-muted">Адрес электронной почты</small>
            <a href={`mailto:${email}`} className="email-link">{email}</a>
          </div>
        </div>
    </div>
  )
}
