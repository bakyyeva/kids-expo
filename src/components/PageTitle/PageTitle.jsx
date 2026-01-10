import './page-title.css'

export default function PageTitle({ title }) {
  return (
    <section className='page-title-section'>
      <div className="container position-relative">
        <div className='d-flex justify-content-center align-items-center py-4 py-md-5'>
          <p className="page-title mb-0 text-white">{title}</p>
        </div>
      </div>
    </section>
  )
}
