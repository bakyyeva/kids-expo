import PageTitle from '../../components/PageTitle'
import './documents.css'

export default function Documents() {
  const docs = [
    {
      title: 'Порядок регистрации посетителей',
      href: '#',
    },
    {
      title: 'Порядок регистрации посетителей',
      href: '#',
    },
    {
      title: 'Политика в отношении обработки персональных данных',
      href: '#',
    },
    {
      title: 'Политика в отношении обработки персональных данных',
      href: '#',
    },
  ]

  return (
    <div className="documents-page border-bottom">
      <PageTitle title="Документы" />

      <section className="py-5">
        <div className="container col-8 mb-4">

        <div className="row g-4">
            {docs.map((d, idx) => (
                <div className="col-12 col-md-6" key={idx}>
                <a
                    href={d.href}
                    className="doc-card d-flex flex-column align-items-center justify-content-center text-center text-decoration-none h-100"
                >
                    <span className="material-symbols-outlined doc-icon">
                    picture_as_pdf
                    </span>
                    <p className="mb-0 doc-title">{d.title}</p>
                </a>
                </div>
            ))}
        </div>

        </div>
      </section>
    </div>
  )
}
