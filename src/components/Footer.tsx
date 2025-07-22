import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className='text-center py-6 text-sm text-gray-500 bg-white border-t'>
            ©{new Date().getFullYear()} Fjord Import. {t('footer.copyright')}
        </footer>
    )
}