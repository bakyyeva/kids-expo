import PageTitle from '../../components/PageTitle'
import './benefits.css'

export default function Benefits() {
  const benefits = [
    {
      icon: 'trending_up',
      text:
        'Уникальная возможность продвижения вашего бренда и продукции на рынке Туркменистана и Центральной Азии.',
    },
    {
      icon: 'groups',
      text:
        'Представление вашей продукции перед тысячами посетителей и потенциальных клиентов.',
    },
    {
      icon: 'handshake',
      text:
        'Возможность установить долгосрочные деловые партнёрства с компаниями из Туркменистана, Центральной Азии и других стран.',
    },
    {
      icon: 'flight',
      text:
        'Уникальная возможность участвовать по льготным условиям (авиаперелёт, местный транспорт, проживание по льготным условиям, визовая поддержка).',
    },
  ]

  return (
    <div className="benefits-page border-bottom">
      <PageTitle title="Преимущества участия" />

      <section className="py-5">
        <div className="container col-8">
          <h2 className="text-center fw-bold mb-2">
            Приняв участие на «Kids Expo»: всё для детей»
          </h2>
          <h3 className="text-center fw-bold mb-5">у компаний появятся:</h3>

          <div className="row g-4 mb-4">
            {benefits.map((b, idx) => (
                <div className="col-12 col-md-6" key={idx}>
                <div className="benefit-card d-flex align-items-start gap-3 p-4 h-100">
                    <span className="material-symbols-outlined benefit-icon">
                    {b.icon}
                    </span>
                    <p className="mb-0 text-white">{b.text}</p>
                </div>
                </div>
            ))}
            </div>
            
        </div>
      </section>
    </div>
  )
}
