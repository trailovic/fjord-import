import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LangSwitcher from './LangSwitcher'

export default function Header() {
    const { t } = useTranslation()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    const handleNavClick = () => setIsMenuOpen(false)

    return (
        <header className='flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-50'>
            {/* Logo */}
            <div className='flex items-center'>
                <img src='/logo.png' alt='logo' className='h-8 w-auto' />
                <h1 className='text-xl font-semibold logo-text'>Fjord Import</h1>
            </div>

            {/* Desktop Nav */}
            <div className='hidden sm:flex items-center gap-4'>
                <nav className='space-x-4'>
                    <a href='#services' className='hover:underline'>
                        {t('nav.item1')}
                    </a>
                    <a href='#about' className='hover:underline'>
                        {t('nav.item2')}
                    </a>
                    <a href='#contact' className='hover:underline'>
                        {t('nav.item3')}
                    </a>
                </nav>
                <LangSwitcher />
            </div>

            {/* Mobile menu toggle */}
            <div className='flex sm:hidden items-center gap-3'>
                <LangSwitcher />
                <button
                    ref={buttonRef}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='focus:outline-none cursor-pointer'
                    aria-label='Toggle menu'
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        ) : (
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown nav */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className='absolute top-16 right-6 bg-gray-200 rounded-md shadow-md space-y-2 sm:hidden z-40'
                >
                    <a href='#services' className='block px-4 py-2 hover:bg-gray-100' onClick={handleNavClick}>
                        {t('nav.item1')}
                    </a>
                    <a href='#about' className='block px-4 py-2 hover:bg-gray-100' onClick={handleNavClick}>
                        {t('nav.item2')}
                    </a>
                    <a href='#contact' className='block px-4 py-2 hover:bg-gray-100' onClick={handleNavClick}>
                        {t('nav.item3')}
                    </a>
                </div>
            )}
        </header>
    )
}