import { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import './participant-form.css'

// TODO:: FORM SUBMIT

export default function ParticipantForm() {
	const [formData, setFormData] = useState({
		companyName: '',
		contactPerson: '',
		website: '',
		phone: '',
		email: '',
		products: '',
		consent: false
	})

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		alert('Form submitted!')
	}

	return (
		<div className="participant-form-page border-bottom">
            <PageTitle title="Онлайн-заявка для участников" />

            <section className='py-5'>
                <div className="container col-md-8 mb-4">

                    <form className="participant-form" onSubmit={handleSubmit}>
                        <div className="row justify-content-center mb-4">

                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Название компании:"
                                    name="companyName"
                                    placeholder="Например, ХО «Алтын Асыр»"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Контактное лицо (ФИО):"
                                    name="contactPerson"
                                    placeholder="Например, Ахняев Сердар Мередович"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Веб-сайт:"
                                    name="website"
                                    type="url"
                                    placeholder="Например, kids.turkmenexpo.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Телефон:"
                                    name="phone"
                                    type="tel"
                                    placeholder="+993 (XX) XX-XX-XX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="E-mail:"
                                    name="email"
                                    type="email"
                                    placeholder="Например, contact@turkmenexpo.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Textarea
                                    label="Демонстрируемая продукция / оборудование / услуги:"
                                    name="products"
                                    placeholder="Например, детская одежда и обувь, развивающие игрушки из дерева, школьные принадлежности и канцтовары, организация детских праздников, спортивные секции"
                                    value={formData.products}
                                    onChange={handleChange}
                                    rows={6}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Checkbox
                                    label="Даю согласие на обработку своих данных"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-actions col-md-8 col-12 text-center mt-5 mb-2">
                                <Button type="submit" variant="primary">
                                    Отправить
                                </Button>
                            </div>

                        </div>
                    </form>

                </div>
            </section>

		</div>
	)
}
