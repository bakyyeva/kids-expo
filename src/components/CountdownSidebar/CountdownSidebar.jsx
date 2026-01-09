import './countdown.css'

export default function CountdownSidebar({ days, hours, minutes, seconds }) {
  const items = [
    { value: days, label: 'дней' },
    { value: hours, label: 'часов' },
    { value: minutes, label: 'минут' },
    { value: seconds, label: 'секунд' },
  ]

  return (
    <aside className="countdown-sidebar d-none d-lg-block">
      {items.map((item, idx) => (
        <div key={idx} className="countdown-item shadow-sm">
          <div className="countdown-box">
            <div className="countdown-value">{item.value}</div>
            <div className="countdown-label">{item.label}</div>
          </div>
        </div>
      ))}
    </aside>
  )
}
