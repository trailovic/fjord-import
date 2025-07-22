import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'

export default function Contact() {
    const { t } = useTranslation()
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('sending')

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
            .then(() => {
                setStatus('success')
                e.currentTarget.reset()
            })
            .catch(() => {
                setStatus('error')
            })
    }

    return (
        <section id='contact' className='px-6 py-16'>
            <h3 className='title-font text-2xl font-semibold mb-6 text-center'>
                {t('contact.title')}
            </h3>

            <form onSubmit={sendEmail} className='max-w-xl mx-auto space-y-4'>
                <input
                    type='text'
                    name='name'
                    required
                    placeholder={t('contact.form.name')}
                    className='w-full p-3 border rounded-md'
                />
                <input
                    type={t('contact.form.email')}
                    name='email'
                    required
                    placeholder='Email'
                    className='w-full p-3 border rounded-md'
                />
                <textarea
                    name='message'
                    required
                    placeholder={t('contact.form.message')}
                    rows={5}
                    className='w-full p-3 border rounded-md'
                ></textarea>

                <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 cursor-pointer'>
                        {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                </button>

                {status === 'success' && (
                    <p className='text-green-600 text-sm text-center mt-2'>
                        {t('contact.form.success')}
                    </p>
                )}

                {status === 'error' && (
                    <p className='text-red-600 text-sm text-center mt-2'>
                        {t('contact.form.error')}
                    </p>
                )}

            </form>
        </section>
    )
}