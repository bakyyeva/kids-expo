import Button from '../../components/Button'
import NewsCard from '../../components/NewsCard'
import './news.css'

import news1 from '../../assets/images/news1.jpg'

export default function News() {
  const items = [
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' },
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' },
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' },
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' },
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' },
    { image: news1, date: '12.02.2025', title: 'Посещение выставки Spielwarenmesse 2025 компанией ТуркменЭкспо: Вдохновение и планы на будущее' }
  ]

  return (
    <div className="news-page border-bottom">

      <section className="py-5">
        <div className="container col-8">
            <h3 className='text-center mx-auto mb-4'>Новости</h3>
          <div className="row g-4">
            {items.map((n, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <NewsCard image={n.image} date={n.date} title={n.title} />
              </div>
            ))}
          </div>

          <div className="text-center my-4">
            <Button className="px-4 py-2">Показать больше</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
