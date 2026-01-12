import PageTitle from '../../components/PageTitle'
import './photo-report.css'
import photoReportImage from '../../assets/images/photo-report.jpg'

export default function PhotoReport() {
  return (
    <div className="photo-report-page border-bottom">
      <PageTitle title="Фоторепортаж" />

      <section className="py-5">
        <div className="container col-8 mb-5">

          <div className="text-center mb-4">
              <h5 className="fw-bold fs-m mb-2">Экспозиция</h5>
          </div>

          <div className="years-tabs d-flex gap-4 mb-4 justify-content-center">
            <p className="year active">2024</p>
            <p className="year">2025</p>
          </div>

          <div className="main-photo text-center mx-auto my-4">
            <img src={photoReportImage} alt="Экспозиция" className="img-fluid" />
          </div>

          <div className='d-flex justify-content-evenly align-items-center mb-5'> 
            <span className="material-symbols-outlined">chevron_left</span>
            <div className="counter text-muted">1/57</div>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>

        </div>
      </section>

    </div>
  )
}
