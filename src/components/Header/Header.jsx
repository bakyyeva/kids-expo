import { Link } from 'react-router-dom'
import { useState } from 'react'
import './header.css'
import Logo from '../../assets/icons/Logo.svg'
import Dropdown from '../Dropdown'

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="site-header">
			<div className="topbar">
				<div className="container">
					<div className="topbar-inner d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center py-2 gap-2 gap-lg-0">
						<div className="top-left d-flex align-items-center gap-2 gap-lg-3 flex-wrap">
							<span className="material-symbols-outlined">location_on</span>
							<div className="d-flex align-items-center gap-2 gap-lg-3 flex-wrap">
								<div className="text-nowrap">Aшхабад, Туркменистан</div>
								<div className="header-link d-flex gap-2 gap-lg-3">
									<Link to="#" className="text-white">Путеводитель</Link>
									<Link to="#" className="text-white">Контакты</Link>
									<Link to="#" className="text-white">Новости</Link>
								</div>
							</div>
						</div>

						<div className="top-right d-flex align-items-center gap-2 gap-lg-3">
							<span className="material-symbols-outlined">call</span>
							<div className="fw-semibold text-nowrap">+993(62) 00-62-00</div>
							<select aria-label="language" className="lang-select form-select form-select-sm">
								<option>Рус</option>
								<option>Tkm</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg bg-white shadow-sm">
				<div className="container d-flex align-items-center">
					<Link className="navbar-brand d-flex align-items-center" to="/">
						<img src={Logo} alt="Kids Expo Turkmenistan" />
					</Link>

					<button
						className={`navbar-toggler ${mobileOpen ? '' : 'collapsed'}`}
						type="button"
						aria-controls="mainNav"
						aria-expanded={mobileOpen}
						aria-label="Toggle navigation"
						onClick={() => setMobileOpen(v => !v)}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
{/* TODO:: link hover color */}
					<div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="mainNav">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
							<li className="nav-item">
								<Dropdown title="Выставка">
									<div className="dropdown-content">
										<div className="dropdown-section">
											<Link to="/about-expo" className="dropdown-item">О выставке</Link>
											<Link to="/theme" className="dropdown-item">Тематика</Link>
											<Link to="/photo-report" className="dropdown-item">Фоторепортаж</Link>
											<Link to="/video-report" className="dropdown-item">Видеорепортаж</Link>
											<Link to="/news" className="dropdown-item">Новости</Link>
											<Link to="/faq" className="dropdown-item">Вопросы-ответы</Link>
										</div>
									</div>
								</Dropdown>
							</li>

							<li className="nav-item">
								<Dropdown title="Участникам">
									<div className="dropdown-content">
										<div className="dropdown-section">
											<Link to="/participants" className="dropdown-item">Информация для участников</Link>
											<Link to="/benefits" className="dropdown-item">Преимущества участия</Link>
											<Link to="/documents" className="dropdown-item">Документы</Link>
											<Link to="/meetings-success" className="dropdown-item">B2B | B2G встречи</Link>
											<Link to="/participants-list" className="dropdown-item">Список участников</Link>
											<Link to="/participant-form" className="dropdown-item">Онлайн-заявка для участников</Link>
											<Link to="/stand-booking" className="dropdown-item">Забронировать стенд</Link>
											<Link to="/form-template" className="dropdown-item">Форма шаблон</Link>
										</div>
									</div>
								</Dropdown>
							</li>

							<li className="nav-item">
								<Dropdown title="Посетителям">
									<div className="dropdown-content">
										<div className="dropdown-section">
											<Link to="#" className="dropdown-item">Информация для посетителей</Link>
											<Link to="#" className="dropdown-item">Зачем посещать</Link>
											<Link to="#" className="dropdown-item">Программа</Link>
											<Link to="#" className="dropdown-item">Каталог</Link>
										</div>
									</div>
								</Dropdown>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
