import './home.css'

import Button from '../../components/Button'
import StatCard from '../../components/StatCard'
import InfoCard from '../../components/InfoCard'
import CountdownSidebar from '../../components/CountdownSidebar'

import sliderImage from '../../assets/images/banner.png'
import playerImage from '../../assets/images/player.jpg'
import infoCardBg1 from '../../assets/images/infocard-bg1.jpg'
import infoCardBg2 from '../../assets/images/infocard-bg2.jpg'


export default function Home() {
  return (
    <div className="home-page">

      <section className="slider-section">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 slider-img" src={ sliderImage} alt="Kids expo" />
              <div className="carousel-caption">
                  <div className="slider-caption ms-md-4 col-4 col-md-4 col-lg-3">
                      <Button className='btn-lg d-none d-md-inline-block'>Зарегистрироваться</Button>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="actions-section py-4 py-lg-5 border-top">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button className="px-4">План выставки</Button>
            <Button className="px-4">Забронировать стенд</Button>
            <Button className="px-4">Список участников</Button>
            <Button className="px-4">B2B | B2G встречи</Button>
            <Button className="px-4">B2B | B2G встречи</Button>
          </div>
        </div>
      </section>

      <section className="report-section py-4 py-lg-5 position-relative bg-light">

        <CountdownSidebar days={99} hours={24} minutes={60} seconds={19} />

        <div className="container col-8">
          <div className="row align-items-start gy-3">
            <div className="col-12 col-lg-6">
              <h3 className="fw-bold mb-3">Изучите отчет Kids Expo 2024!</h3>
              <p className="text-secondary mb-3">
                Отчет Kids Expo 2024 — одного из крупнейшего мероприятия для индустрии детских товаров и развлечений.
                В нем представлен анализ посещаемости, данные о странах-участниках, оценка удовлетворенности гостей,
                а также ключевые тренды.
              </p>
              <Button variant="outline" className="btn-purple-outline d-flex align-items-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Скачать
              </Button>
            </div>
            <div className="col-12 col-lg-6">
              <img src={playerImage} alt="player" className="img-fluid shadow-sm" />
            </div>
          </div>

          <div className="row mt-4 g-3">
            <div className="col-12 col-sm-6 col-lg-3">
              <StatCard value="8,400 м²" label="выставочной площади" />
              </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <StatCard value="10000+" label="Посетители посетят" />
              </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <StatCard value="100+" label="Экспоненты из более чем 30" />
              </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <StatCard value="80%" label="Участники принимают" />
              </div>
          </div>
        </div>
      </section>

      <section className="info-section py-4 py-lg-5">
        <div className="container col-8">
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <InfoCard
                image={infoCardBg1}
                title="Гостиницы, трансфер, визы"
                text="По вопросам размещения в гостиницах, визовой поддержки, транспортного и экскурсионного обслуживания обращайтесь к официальным туроператорам выставки"
              />
            </div>
            <div className="col-12 col-lg-6">
              <InfoCard
                image={infoCardBg2}
                title="Ознакомьтесь с планом выставки Kids Expo 2025"
                text="Как выбрать лучшее место на выставке? Расположение экспозиции повышает шанс привлечь внимание "
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}