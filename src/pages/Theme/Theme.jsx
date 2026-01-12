import PageTitle from '../../components/PageTitle'
import ThemeCard from '../../components/ThemeCard'

import './theme.css'

import themeIcon1 from '../../assets/icons/thematic-baby.svg'
import themeIcon2 from '../../assets/icons/thematic-bag.svg'
import themeIcon3 from '../../assets/icons/thematic-hand.svg'
import themeIcon4 from '../../assets/icons/thematic-toy.svg'
import themeIcon5 from '../../assets/icons/thematic-music.svg'
import themeIcon6 from '../../assets/icons/thematic-gold.svg'
import themeIcon7 from '../../assets/icons/thematic-tablet.svg'
import themeIcon8 from '../../assets/icons/thematic-book.svg'


export default function Theme() {

    const themeData = [
        { icon: themeIcon1, title: 'Товары для новорожденных'},
        { icon: themeIcon2, title: 'Товары для школы' },
        { icon: themeIcon3,  title: 'Образование и обучение для детей'},
        { icon: themeIcon4,  title: 'Игрушки и развивающие пособия', },
        { icon: themeIcon5, title: 'Танцы, музыка и искусство в детской жизни', },
        { icon: themeIcon6,  title: 'Здоровье и безопасность детей',  },
        { icon: themeIcon7,  title: 'Инновационные технологии в детском образовании',},
        { icon: themeIcon8,  title: 'Детская литература и чтение',  },

        { icon: themeIcon1, title: 'Товары для новорожденных'},
        { icon: themeIcon2, title: 'Товары для школы' },
        { icon: themeIcon3,  title: 'Образование и обучение для детей'},
        { icon: themeIcon4,  title: 'Игрушки и развивающие пособия', },
        { icon: themeIcon5, title: 'Танцы, музыка и искусство в детской жизни', },
        { icon: themeIcon6,  title: 'Здоровье и безопасность детей',  },
        { icon: themeIcon7,  title: 'Инновационные технологии в детском образовании',},
        { icon: themeIcon8,  title: 'Детская литература и чтение',  }
    ]

  return (
    <div className="about-page border-bottom">
      <PageTitle title="Тематика" />

      <section className="py-5">
        <div className="container col-8">

           <div className="row gy-5">
                {themeData.map((theme, index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-3">
                        <ThemeCard icon={theme.icon} title={theme.title} />
                    </div>
                ))}
            </div>

        </div>
      </section>
    </div>
  )
}