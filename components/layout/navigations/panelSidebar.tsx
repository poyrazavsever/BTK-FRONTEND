
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const sidebarLinks = [
    { label: 'Fikirleriniz', icon: 'mdi:lightbulb-on-outline', href: '/panel/ideas' },
    { label: 'Projeleriniz', icon: 'mdi:folder-outline', href: '/panel/projects' },
    { label: 'Yatırımlarınız', icon: 'mdi:finance', href: '/panel/investments' },
    { label: 'Mesajlar', icon: 'mdi:email-outline', href: '/panel/messages' },
];

const settingsLinks = [
    { label: 'Profil Ayarları', icon: 'mdi:account-cog-outline', href: '/panel/settings' },
    { label: 'Çıkış Yap', icon: 'mdi:logout', href: '/auth/login' },
];

const extraLinks = [
    { label: 'Yardım', icon: 'mdi:help-circle-outline', href: '/panel/help' },
    { label: 'SSS', icon: 'mdi:comment-question-outline', href: '/panel/faq' },
    { label: 'Destek', icon: 'mdi:lifebuoy', href: '/panel/support' },
];


const PanelSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className={`fixed top-0 left-0 h-screen z-30 bg-white shadow-lg flex flex-col justify-between transition-all duration-300 border-r border-gray-200 ${isOpen ? 'w-[260px]' : 'w-16'} overflow-hidden`}
        >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 h-[64px]">
                <button
                    className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
                >
                    <Icon icon={isOpen ? 'mdi:chevron-left' : 'mdi:chevron-right'} width={28} />
                </button>
                <div className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className='w-8 h-8' />
                    {isOpen && <span className='font-nunito text-lg text-text'>Gelişiyor</span>}
                </div>
            </div>

            {isOpen && (
                <>
                    <div className="flex-1 flex flex-col gap-2 py-4">
                        <div className="px-4">
                            <span className="text-xs font-semibold text-gray-500 mb-2 block">Panel</span>
                            <ul className="flex flex-col gap-1">
                                {sidebarLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
                                            <Icon icon={link.icon} width={24} />
                                            <span className="text-sm">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-4">
                            <span className="text-xs font-semibold text-gray-500 mb-2 block">Ayarlar</span>
                            <ul className="flex flex-col gap-1">
                                {settingsLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
                                            <Icon icon={link.icon} width={24} />
                                            <span className="text-sm">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="px-4">
                            <span className="text-xs font-semibold text-gray-500 mb-2 block">Diğer</span>
                            <ul className="flex flex-col gap-1">
                                {extraLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
                                            <Icon icon={link.icon} width={24} />
                                            <span className="text-sm">{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="px-4 pb-4">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.15, ease: 'easeInOut' }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 shadow"
                            >
                                <Icon icon="mdi:account-circle-outline" width={36} />
                                <div>
                                    <span className="block font-semibold text-gray-800">Kullanıcı Adı</span>
                                    <span className="block text-xs text-gray-500">Üye</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </>
            )}
        </motion.nav>
    );
};

export default PanelSidebar;