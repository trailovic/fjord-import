import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className='relative w-full h-[50vh] sm:h-[40vh] overflow-hidden'>
            <video
                className='absolute top-0 left-0 w-full h-full object-cover'
                autoPlay
                loop
                muted
            >
                <source src='/hero.mp4' type='video/mp4' />
                [Your browser does not support the video]
            </video>

            <div className='absolute inset-0 backdrop-blur-sm bg-black/40' />

            <div className='relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white'>
                <h2 className='title-font text-4xl sm:text-5xl mb-4 drop-shadow-md'>
                    {t('hero.title')}
                </h2>
                <p className='max-w-xl text-gray-200 text-md sm:text-xl drop-shadow-sm mx-10'>
                    {t('hero.subtitle')}
                </p>
            </div>
        </section>
    )
}