import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import './meetings-success.css'

export default function MeetingsSuccess() {
  return (
    <div className="meetings-success-page border-bottom">
      <PageTitle title="B2B | B2G встречи" />

      <section className="py-5">
        <div className="container col-8">

          <div className="d-flex flex-column align-items-center justify-content-center text-center gap-4 py-4">
            <p className="meeting-text mb-0">Форма успешно отправлена!</p>
            <Link to="/" className="btn border px-4 py-2">Вернуться на главную</Link>
          </div>

        </div>
      </section>
    </div>
  )
}
