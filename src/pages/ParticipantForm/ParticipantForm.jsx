import PageTitle from '../../components/PageTitle'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import './participant-form.css'

export default function ParticipantForm() {

	return (
		<div className="participant-form-page border-bottom">
            <PageTitle title="Онлайн-заявка для участников" />

            <section className='py-5'>
                <div className="container col-md-8 mb-4">

                    <form className="participant-form">
                        <div className="row justify-content-center mb-4">

                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Название компании:"
                                    name="companyName"
                                    placeholder="Например, ХО «Алтын Асыр»"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Контактное лицо (ФИО):"
                                    name="contactPerson"
                                    placeholder="Например, Ахняев Сердар Мередович"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Веб-сайт:"
                                    name="website"
                                    type="url"
                                    placeholder="Например, kids.turkmenexpo.com"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Телефон:"
                                    name="phone"
                                    type="tel"
                                    placeholder="+993 (XX) XX-XX-XX"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="E-mail:"
                                    name="email"
                                    type="email"
                                    placeholder="Например, contact@turkmenexpo.com"
                                    required
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Textarea
                                    label="Демонстрируемая продукция / оборудование / услуги:"
                                    name="products"
                                    placeholder="Например, детская одежда и обувь, развивающие игрушки из дерева, школьные принадлежности и канцтовары, организация детских праздников, спортивные секции"
                                    rows={6}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Checkbox
                                    label="Даю согласие на обработку своих данных"
                                    name="consent"
                                    required
                                />
                            </div>

                            <div className="form-actions col-md-8 col-12 text-center mt-5 mb-2">
                                <Button type="submit" variant="primary" className='btn'>
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
