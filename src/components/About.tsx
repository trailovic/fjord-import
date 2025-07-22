import { useTranslation } from 'react-i18next'
import ship from '../../public/ship.jpg'

export default function About() {
    const { t } = useTranslation()

    return (
        <section id='about' className='px-6 py-16 bg-gray-50 mx-6 rounded-xl'>
            <div className='max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:start gap-8 text-center'>
                <div className='w-full sm:w-1/2'>
                    <img
                        src={ship}
                        alt='Overseas shipping'
                        className='rounded-xl shadow-md w-full h-auto object-cover'
                    />
                </div>
                <div className='sm:w-1/2 text-center sm:text-left'>
                    <h3 className='title-font text-2xl font-semibold mb-6'>
                        {t('about.title')}
                    </h3>
                    <p className='text-gray-600 mx-6 sm:mx-auto'>
                        {t('about.desc')}
                    </p>
                </div>
            </div>
        </section>
    )
}