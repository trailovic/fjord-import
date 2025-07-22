import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation()

    const cards = t('services.cards', {
        returnObjects: true
    }) as {
        title: string
        desc: string
    }[]

    return (
        <section id='services' className='px-6 py-16'>
            <h3 className='title-font text-2xl font-semibold mb-10 text-center'>
                {t('services.title')}
            </h3>
            <div className='grid sm:grid-cols-3 gap-6'>
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className='border rounded-xl p-6 hover:shadow-md transition'
                    >
                        <h4 className='title-font text-lg font-medium mb-2'>{card.title}</h4>
                        <p className='text-sm text-gray-600'>{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}