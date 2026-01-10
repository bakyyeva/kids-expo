import Logo from '../../assets/icons/Logo.svg'
import Button from '../Button'
import './footer.css'
import facebookIcon from '../../assets/icons/facebook.svg'
import instegramIcon from '../../assets/icons/instegram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import xIcon from '../../assets/icons/x.svg'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="site-footer mt-auto">
	
			<div className="footer-subscribe border-bottom">
				<div className="container py-3 py-md-4">
					<form className="row g-3 align-items-center justify-content-center justify-content-md-evenly">
						<div className="col-12 col-md-auto text-center text-md-start fw-semibold footer-subscribe-label">
							Подпишитесь на новости:
						</div>
						<div className="col-12 col-md-auto col-lg-5">
							<input
								type="email"
								className="footer-subscribe-input"
								placeholder="Placeholder"
							/>
						</div>
						<div className="col-12 col-md-auto d-flex justify-content-center">
							<Button type="submit" variant="primary" className="footer-subscribe-button">
								Подписаться
							</Button>
						</div>
					</form>
				</div>
			</div>

			<div className="footer-main">
				<div className="container col-8 py-3 py-md-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
					<div className="footer-brand d-flex align-items-center gap-2">
						<img src={Logo} alt="Kids Expo Turkmenistan" className="footer-logo" />
					</div>
					<div className="footer-social d-flex align-items-center gap-3">
						<a href="#" aria-label="Facebook">
							<img src={ facebookIcon } alt="facebook" />
						</a>
						<a href="#" aria-label="Instagram">
							<img src={ instegramIcon } alt="instegram" />
						</a>
						<a href="#" aria-label="LinkedIn">
							<img src={ linkedinIcon } alt="linkedin" />
						</a>
						<a href="#" aria-label="X">
							<img src={ xIcon} alt="x" />
						</a>
					</div>
				</div>
			</div>
{/* TODO:: hr col-8 */}
			<div className="footer-bottom border-top">
				<div className="container py-3 text-center small text-muted">
					©{year} Все права защищены
				</div>
			</div>
		</footer>
	)
}
