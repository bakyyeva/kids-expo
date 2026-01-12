import PageTitle from '../../components/PageTitle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioGroup from '../../components/RadioGroup'
import './stand-booking.css'

const formFields = [
    {
        type: 'radio',
        name: 'areaType',
        label: 'Выберите один из вариантов:',
        options: [
            { label: 'Необорудованная площадь', value: 'unequipped' },
            { label: 'Оборудованная площадь', value: 'equipped' },
        ]
    },
    { type: 'input', name: 'companyName', label: 'Название компании/организации', placeholder: 'Placeholder' },
    { type: 'input', name: 'representativeName', label: 'Имя представителя', placeholder: 'Placeholder' },
    { type: 'input', name: 'website', label: 'Веб-сайт:', placeholder: 'Например, kids.turkmenexpo.com' },
    { type: 'input', name: 'position', label: 'Название должности/позиция', placeholder: 'Placeholder' },
    { type: 'input', name: 'participantsCount', label: 'Количество участников', placeholder: 'Placeholder' },
    { type: 'input', name: 'country', label: 'Страна', placeholder: 'Placeholder' },
    { type: 'input', name: 'email', label: 'E-mail адрес', placeholder: 'Placeholder' },
    { type: 'input', name: 'phone', label: 'Номер телефона', placeholder: 'Placeholder' },
    { type: 'input', name: 'website2', label: 'Веб-сайт', placeholder: 'Placeholder' },
    {
        type: 'radio',
        name: 'visaSupport',
        label: 'Визовая поддержка:',
        options: [
            { label: 'Да', value: 'yes' },
            { label: 'Нет', value: 'no' },
        ]
    },
]

const renderField = (field) => {
    const baseClass = "col-md-8 col-12 mt-3"
    
    switch (field.type) {
        case 'input':
            return (
                <div key={field.name} className={baseClass}>
                    <Input
                        label={field.label}
                        placeholder={field.placeholder}
                        name={field.name}
                    />
                </div>
            )
        case 'radio':
            return (
                <div key={field.name} className={`${baseClass} mb-2`}>
                    <RadioGroup
                        label={field.label}
                        name={field.name}
                        options={field.options}
                    />
                </div>
            )
        default:
            return null
    }
}

export default function StandBooking() {

    return (
        <div className="stand-booking-page border-bottom">
            <PageTitle title="Забронировать стенд" />

            <section className='py-5'>
                <div className="container col-md-8 mb-4">

                    <form>
                        <div className="row justify-content-center mb-4">

                            {formFields.map(renderField)}

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
