import PageTitle from '../../components/PageTitle'
import './about.css'
import aboutExpoImage from '../../assets/images/about-expo.jpg'

export default function About() {
  return (
    <div className="about-page border-bottom">
      <PageTitle title="О выставке" />

      <section className="py-5">
        <div className="container col-8">

          <div className="row">
            <div className="col-12">
              <p className="about-intro">
                С 21 по 23 августа 2025 года в Ашхабаде состоится Международная выставка-ярмарка «Kids Expo: Всё для детей» – значимое событие, которое
                продемонстрирует тенденции и образовательные возможности для детей Туркменистан, станет платформой для обмена идеями и опытом в области
                детского развития и укрепления международных связей.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 my-4">
              <div className="about-image">
                <img src={aboutExpoImage} alt="Kids Expo" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-3">
              <p className="about-text">
                Мероприятие представит уникальные возможности для международных организаций, стремящихся наладить сотрудничество в области поддержки детской
                инициатив, образовательных проектов и культурного обмена. Участие в выставке позволит вам выйти на новые рынки и наладить творческие отношения с
                ключевыми игроками в этой сфере.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h4 className="fw-bold mb-3">Приняв участие, вы сможете:</h4>
              <ul className="about-benefits-list ms-2">
                <li>
                  <p>Наладить контакты с образовательными организациями, компаниями, экспертами и активистами в сфере детского развития.</p>
                </li>
                <li>
                  <p>Показать инновационным инициативам и продукцию для малышей от самых ранних, средних и высоких стадий образования и развития.</p>
                </li>
                <li>
                  <p>Привлекать свои интересы и устанавливать уровень ценовой политики различных категорий.</p>
                </li>
                <li>
                  <p>Содействовать развитию культурных и образовательных инициатив в обществе, способствуя активным проектам детей и семейного досуга.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <p className="about-text">
                На выставке будет предоставлена возможность организовать встречи с образовательными учреждениями, культурными центрами, а также с партнерами по
                государственным и частным секторам, включая бизнес-миссии. Это отличная возможность для выполнения договорённости и обсуждение дальнейшего
                сотрудничества.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <p className="about-text">
                Ежегодно мероприятие принимает участников из Туркменистана и других стран. В прошлом году выставку посетили около 90 участников и более 10000
                посетителей.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="about-organizer">
                <h4 className="fw-bold mb-3">Организатор</h4>
                <p className="mb-0">Торгово-промышленная палата Туркменистан</p>
              </div>
            </div>            
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="about-organizer">
                <h4 className="fw-bold mb-3">Со-организатор</h4>
                <p className="mb-0">Компания «Туркмен Экспо»</p>
              </div>
            </div>            
          </div>

        </div>
      </section>
    </div>
  )
}