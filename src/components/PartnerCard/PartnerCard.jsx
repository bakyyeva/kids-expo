import './partner-card.css'

export default function PartnerCard({ logo }) {
  return (
    <div className="partner-card d-flex justify-content-center align-items-center">
      <img src={logo}  className="img-fluid" />
    </div>
  )
}
