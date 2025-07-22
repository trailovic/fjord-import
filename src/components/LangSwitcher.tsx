import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'

export default function LangSwitcher() {
    const i18n = useTranslation().i18n
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng).catch(console.error)
        setIsOpen(false)
    }

    const currentLang = i18n.language.toUpperCase() || 'EN'

    return (
        <div className='relative inline-block text-left z-50'>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className='px-3 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-100 transition cursor-pointer'
            >
                {currentLang} ▾
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    className='absolute right-0 mt-2 w-28 bg-gray-200 shadow-lg overflow-hidden'
                >
                    <button
                        onClick={() => handleLanguageChange('en')}
                        className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer'
                    >
                        English
                    </button>
                    <button
                        onClick={() => handleLanguageChange('no')}
                        className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer'
                    >
                        Norsk
                    </button>
                    <button
                        onClick={() => handleLanguageChange('hr')}
                        className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer'
                    >
                        Hrvatski
                    </button>
                </div>
            )}
        </div>
    )
}