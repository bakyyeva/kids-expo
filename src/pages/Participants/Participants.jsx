import PageTitle from '../../components/PageTitle'
import './participants.css'

export default function Participants() {
  return (
    <div className="participants-page border-bottom">
    
        <PageTitle title="Информация для участников" />

      <section className="py-5">
        <div className="container col-8">

          <div className="d-flex flex-column flex-md-row gap-4 justify-content-between">
            <div className="phase-card flex-fill">
              <div className="phase-header purple text-white text-center py-3 fw-semibold">Монтаж</div>
              <div className="phase-body bg-white text-center py-3">С 1-го августа</div>
            </div>

            <div className="phase-card flex-fill">
              <div className="phase-header orange text-white text-center py-3 fw-semibold">Работа</div>
              <div className="phase-body bg-white text-center py-3">19–22 августа</div>
            </div>

            <div className="phase-card flex-fill">
              <div className="phase-header purple text-white text-center py-3 fw-semibold">Демонтаж</div>
              <div className="phase-body bg-white text-center py-3">23–24 августа</div>
            </div>
          </div>

          <hr className="my-4" />

          <h4 className="fw-semibold mb-3">Как стать участником выставки:</h4>

          <div className="info-box d-flex align-items-center gap-3 p-3 rounded-3 mb-4">
            <span className="material-symbols-outlined text-purple">contract_edit</span>
            <p className="mb-0">
              <a href="#" className="text-purple">Заполните онлайн-заявку</a>
              {' '}и с Вами свяжется наш менеджер, который будет курировать все вопросы по участию Вашей компании в выставке.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
