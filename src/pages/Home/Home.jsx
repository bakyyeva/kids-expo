import './home.css'

import Button from '../../components/Button'
import StatCard from '../../components/StatCard'
import InfoCard from '../../components/InfoCard'
import CountdownSidebar from '../../components/CountdownSidebar'
import NewsCard from '../../components/NewsCard'
import PartnerCard from '../../components/PartnerCard'
import ThemeCard from '../../components/ThemeCard'
import TimeCard from '../../components/TimeCard'

import sliderImage from '../../assets/images/banner.png'
import playerImage from '../../assets/images/player.jpg'
import infoCardBg1 from '../../assets/images/infocard-bg1.jpg'
import infoCardBg2 from '../../assets/images/infocard-bg2.jpg'

import themeIcon1 from '../../assets/icons/thematic-baby.svg'
import themeIcon2 from '../../assets/icons/thematic-bag.svg'
import themeIcon3 from '../../assets/icons/thematic-hand.svg'
import themeIcon4 from '../../assets/icons/thematic-toy.svg'
import themeIcon5 from '../../assets/icons/thematic-music.svg'
import themeIcon6 from '../../assets/icons/thematic-gold.svg'
import themeIcon7 from '../../assets/icons/thematic-tablet.svg'
import themeIcon8 from '../../assets/icons/thematic-book.svg'

import newsImage1 from '../../assets/images/news1.jpg'
import newsImage2 from '../../assets/images/news2.jpg'
import newsImage3 from '../../assets/images/news3.jpg'

import partnerImage from '../../assets/images/partner.jpg'
import mapImage from '../../assets/images/map.jpg'

export default function Home() {
  const themeData = [
    { icon: themeIcon1, title: 'Товары для новорожденных'},
    { icon: themeIcon2, title: 'Товары для школы' },
    { icon: themeIcon3,  title: 'Образование и обучение для детей'},
    { icon: themeIcon4,  title: 'Игрушки и развивающие пособия', },
    { icon: themeIcon5, title: 'Танцы, музыка и искусство в детской жизни', },
    { icon: themeIcon6,  title: 'Здоровье и безопасность детей',  },
    { icon: themeIcon7,  title: 'Инновационные технологии в детском образовании',},
    { icon: themeIcon8,  title: 'Детская литература и чтение',  }
  ]

  const timeData = [
    { title: 'Монтаж выставки', dateRange: '12 мая – 10 июня 2025 года', email: 'contact@turkmensexpo.com' },
    { title: 'Работа', dateRange: '12 мая – 10 июня 2025 года', email: 'contact@turkmensexpo.com' },
    { title: 'Демонтаж', dateRange: '12 мая – 10 июня 2025 года', email: 'contact@turkmensexpo.com' }
  ]

  const newsData = [
    { image: newsImage1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее'},
    { image: newsImage2, date: '06.02.2024', title: 'В Ашхабаде пройдет Международная выставка детских товаров и развлечений Kids Expo Turkmenistan 2025'},
    { image: newsImage3, date: '05.01.2024', title: 'Популярные товары и новинки детской индустрии на Kids Expo Turkmenistan 2024' }
  ]

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
            {/* TODO:: Position card */}
      <section className="theme-section py-4 py-lg-5 bg-light">
        <div className="container col-8">
          <h2 className="text-center mb-5 fw-bold">Тематические направления выставки</h2>
          <div className="row g-4">
            {themeData.map((theme, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <ThemeCard icon={theme.icon} title={theme.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="time-section py-4 py-lg-5">
        <div className="container col-8">
          <h2 className="mb-5 fw-bold">Время выставки</h2>
          <div className="row g-4 mb-5">
            {timeData.map((time, index) => (
              <div key={index} className="col-12 col-md-4">
                <TimeCard title={time.title} dateRange={time.dateRange} email={time.email} />
              </div>
            ))}
          </div>
          <div className="text-center">
             <Button className="px-4">Забронируйте стенд</Button>
          </div>
        </div>
      </section>
            {/* TODO:: carousel */}
      <section className="news-section py-4 py-lg-5 bg-light">
        <div className="container col-8">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center mb-4">
              <h3 className="fw-bold mb-3 mb-md-0">Новости</h3>
                <Button className="btn-purple-outline btn-sm d-flex align-items-center">
                  Все 
                  <span className="material-symbols-outlined">chevron_right</span>
              </Button>
          </div>
          <div className="row g-4 mb-5">
            {newsData.map((news, index) => (
              <div key={index} className="col-12 col-md-4">
                <NewsCard image={news.image} date={news.date} title={news.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section py-4 py-lg-5 bg-light">
        <div className="container col-8">
          <h3 className="fw-bold mb-3">Партнёры</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-md-3">
              <PartnerCard logo={partnerImage} />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <PartnerCard logo={partnerImage} />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <PartnerCard logo={partnerImage} />
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <PartnerCard logo={partnerImage} />
            </div>
          </div>
        </div>
      </section>

      <section className="address-section py-4 py-lg-5 bg-light border-bottom">
        <div className="container col-8 mb-4">
          <div className="row g-3 align-items-stretch">
            <div className="col-12 col-lg-6">
              <h4 className="fw-bold mb-3">Адрес ТПП Туркменистана</h4>
              <p className="text-secondary">
                Отчет Kids Expo 2024 — одного из крупнейшего мероприятия для индустрии детских товаров и развлечений.
                В нем представлен анализ посещаемости, данные о странах-участниках, оценка удовлетворенности гостей,
                а также ключевые тренды, аналитика рынка, инсайты от экспертов, которые формируют будущее детской индустрии.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src={mapImage} className="img-fluid shadow-sm" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}