import PageTitle from '../../components/PageTitle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioGroup from '../../components/RadioGroup'
import './stand-booking.css'

export default function StandBooking() {

    return (
        <div className="stand-booking-page border-bottom">
            <PageTitle title="Забронировать стенд" />

            <section className='py-5'>
                <div className="container col-md-8 mb-4">

                    <form>
                        <div className="row justify-content-center mb-4">

                            <div className="col-md-8 col-12 mt-3 mb-2">
                                <RadioGroup
                                    label="Выберите один из вариантов:"
                                    options={[
                                        { label: "Необорудованная площадь", value: "0" },
                                        { label: "Оборудованная площадь", value: "0" },
                                        ]}
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Название компании/организации"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Имя представителя"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Веб-сайт:"
                                    placeholder="Например, kids.turkmenexpo.com"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Название должности/позиция"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Количество участников"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Страна"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="E-mail адрес"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Номер телефона"
                                    placeholder="Placeholder"
                                />
                            </div>
                            <div className="col-md-8 col-12 mt-3">
                                <Input
                                    label="Веб-сайт"
                                    placeholder="Placeholder"
                                />
                            </div>

                            <div className="col-md-8 col-12 mt-3 mb-2">
                                <RadioGroup
                                    label="Визовая поддержка:"
                                    options={[
                                        { label: "Да", value: "0" },
                                        { label: "Нет", value: "0" },
                                        ]}
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
