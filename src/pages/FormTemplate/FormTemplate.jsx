import PageTitle from '../../components/PageTitle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import RadioGroup from '../../components/RadioGroup'
import FileUpload from '../../components/FileUpload'
import './form-template.css'

const formConfig = {
    sections: [
        {
            id: 'general',
            fields: [
                {
                    type: 'radio',
                    name: 'areaType',
                    label: 'Выберите один из вариантов:',
                    options: [
                        { label: 'Необорудованная площадь', value: 'unequipped' },
                        { label: 'Оборудованная площадь', value: 'equipped' },
                    ]
                },
                { type: 'input',  label: 'Название компании/организации', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Имя представителя', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Веб-сайт:', placeholder: 'Например, kids.turkmenexpo.com' },
                { type: 'input',  label: 'Название должности/позиция', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Количество участников', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Страна', placeholder: 'Placeholder' },
                { type: 'input',  label: 'E-mail адрес', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Номер телефона', placeholder: 'Placeholder' },
                { type: 'input',  label: 'Веб-сайт', placeholder: 'Placeholder' },
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
        },
        {
            id: 'meetingGoals',
            title: 'Цели встречи:',
            fields: [
                { type: 'input', label: 'Основная цель встречи', placeholder: 'Placeholder' },
                { type: 'input', label: 'Краткое описание вашего предложения/проекта/запроса', placeholder: 'Placeholder' },
                { type: 'input', label: 'Соответствующее государственное учреждение/департамент', placeholder: 'Placeholder' },
            ]
        },
        {
            id: 'companyInfo',
            title: 'Иформация о компании/организации:',
            fields: [
                { type: 'input', label: 'Отраслевая промышленность', placeholder: 'Placeholder' },
                { type: 'input', label: 'Ключевые услуги/продукты', placeholder: 'Placeholder' },
                { type: 'input', label: 'Предыдущий опыт работы с правительствами (если применимо)', placeholder: 'Placeholder' },
            ]
        },
        {
            id: 'logistics',
            title: 'Логистика встречи:',
            fields: [
                { type: 'input', label: 'Отраслевая промышленность', placeholder: 'Placeholder' },
                { type: 'input', label: 'Ключевые услуги/продукты', placeholder: 'Placeholder' },
                { type: 'input', label: 'Предыдущий опыт работы с правительствами (если применимо)', placeholder: 'Placeholder' },
                { type: 'input', label: 'Предыдущий опыт работы с правительствами (если применимо)', placeholder: 'Placeholder' },
            ]
        },
        {
            id: 'documents',
            title: 'Логистика встречи:',
            description: '(Пожалуйста, приложите следующие документы, если это необходимо)',
            fields: [
                { type: 'file', label: 'Company/organization profile' },
                { type: 'file', label: 'Personal presentation' },
                { type: 'file', label: 'Relevant certifications/licenses' },
            ]
        }
    ]
}

const renderField = (field, index) => {
    const baseClass = "col-md-8 col-12 mt-3"
    
    switch (field.type) {
        case 'input':
            return (
                <div key={field.name} className={baseClass}>
                    <Input
                        label={field.label}
                        placeholder={field.placeholder}
                        name={field.name}
                        required={field.required}
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
        case 'file':
            return (
                <div key={field.name} className={`${baseClass} mt-4`}>
                    <FileUpload
                        label={field.label}
                        name={field.name}
                        accept=".pdf,.png,.jpg,.jpeg"
                        maxSize={10}
                        multiple={true}
                    />
                </div>
            )
        default:
            return null
    }
}

const renderSection = (section) => (
    <div key={section.id} className="row justify-content-center mb-4">
        {section.title && (
            <div className="col-md-8 col-12 mt-4">
                <h3>{section.title}</h3>
                {section.description && (
                    <p className='upload-field-description'>{section.description}</p>
                )}
            </div>
        )}
        {section.fields.map(renderField)}
    </div>
)

export default function FormTemplate() {

    return (
        <div className="form-template-page border-bottom">
            <PageTitle title="Форма шаблон" />

            <section className='py-5'>
                <div className="container col-md-8 mb-4">

                    <form>
                        
                        {formConfig.sections.map(renderSection)}

                        <div className="row justify-content-center mb-4">
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
