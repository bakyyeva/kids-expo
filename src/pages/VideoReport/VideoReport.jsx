import PageTitle from '../../components/PageTitle'
import './video-report.css'
import photoReportImage from '../../assets/images/photo-report.jpg'

export default function VideoReport() {
  const thumbs = [photoReportImage, photoReportImage, photoReportImage, photoReportImage]

  return (
    <div className="video-report-page border-bottom">
      <PageTitle title="Видеорепортаж" />

      <section className="py-5">
        <div className="container col-8 mb-5">

          <div className="years-tabs d-flex gap-4 mb-4 justify-content-center">
            <p className="year active">2024</p>
            <p className="year">2025</p>
          </div>

            <div className="main-video text-center mx-auto my-4">
              <img src={photoReportImage} alt="Экспозиция" className="img-fluid" />
            </div>

            <h5 className="mb-3">Смотрите также:</h5>
            <div className="row g-3">
              {thumbs.map((src, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div className="thumb-item">
                    <img src={src} alt={`thumb-${idx+1}`} className="img-fluid rounded" />
                  </div>
                </div>
              ))}
            </div>

          <div className="dots d-flex justify-content-center gap-2 mt-3">
            <span className="dot" />
            <span className="dot active" />
            <span className="dot" />
          </div>

        </div>
      </section>
    </div>
  )
}
