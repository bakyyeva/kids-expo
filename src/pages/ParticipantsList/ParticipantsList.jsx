import companyLogo from '../../assets/images/TableCell.jpg'
import flagIcon from '../../assets/icons/flag.svg'
import './participants-list.css'

const sample = {
  name: 'Чудо-Мир',
  country: 'Россия',
  category: 'Игрушки и развивающие товары',
}

export default function ParticipantsList() {
  const companies = new Array(5).fill(sample)

  return (
    <div className="participants-list-page border-bottom">

      <section className="py-5">
        <div className="container col-8">
        
        <h3 className='text-center mx-auto mb-4'>Список участников</h3>

        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
            <p className="text-center mb-5">
                Здесь представлен полный список компаний, принимающих и принимающих участие в нашей выставке. Ознакомьтесь с ними и их сферой деятельности, чтобы лучше спланировать свой визит
            </p>
            </div>
        </div>

        <div className="years-tabs d-flex gap-4 mb-4 justify-content-center">
            <p className="year active">Все участники</p>
            <p className="year">Туркменские компании</p>
            <p className="year">Иностранные компании</p>
        </div>



          <div className="table-wrap shadow-sm mb-5">
            <div className="table-head p-4 border-bottom text-muted row justify-content-evenly">
              <div className="col-md-5 col-12">Название компании</div>
              <div className="col-md-3 col-12">Страна</div>
              <div className="col-md-4 col-12">Категория</div>
            </div>

            {companies.map((c, idx) => (
              <div className="table-row d-flex align-items-center py-3 px-4 border-bottom" key={idx}>
                <div className="col-5 d-flex align-items-center gap-3">
                  <img src={companyLogo}  className="img-fluid" />
                  <p>{c.name}</p>
                </div>
                <div className="col-3 d-flex align-items-center gap-2">
                  <img src={flagIcon} className="flag-icon" />
                  <span>{c.country}</span>
                </div>
                <div className="col-4">
                  {c.category}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </div>
  )
}
