import React, { useState } from "react";

const roles = [
    { key: "user", label: "Kullanıcı" },
    { key: "developer", label: "Geliştirici" },
    { key: "investor", label: "Yatırımcı" },
];

const skillTags = [
    "Frontend", "Backend", "Mobil", "AI", "E-Ticaret", "Nakliye", "Finans", "Diğer"
];

const Settings: React.FC = () => {
    const [profile, setProfile] = useState({
        name: "Poyraz Avsever",
        email: "poyraz@example.com",
        phone: "",
        role: "user",
    });
    const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
    const [notifications, setNotifications] = useState({
        email: true,
        inApp: true,
        investment: true,
    });
    const [skills, setSkills] = useState<string[]>(["Frontend"]);
    const [license, setLicense] = useState({ shareIdeas: true, dataShare: false });

    return (
        <div className="space-y-8">
            {/* Profil Bilgileri */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Profil Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Ad Soyad</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">E-Posta</label>
                        <input
                            type="email"
                            value={profile.email}
                            onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Telefon</label>
                        <input
                            type="tel"
                            value={profile.phone}
                            onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Rol</label>
                        <select
                            value={profile.role}
                            onChange={e => setProfile(p => ({ ...p, role: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        >
                            {roles.map(r => (
                                <option key={r.key} value={r.key}>{r.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Şifre Değiştir */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Şifre Değiştir</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Mevcut Şifre</label>
                        <input
                            type="password"
                            value={passwords.old}
                            onChange={e => setPasswords(p => ({ ...p, old: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Yeni Şifre</label>
                        <input
                            type="password"
                            value={passwords.new}
                            onChange={e => setPasswords(p => ({ ...p, new: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Yeni Şifre (Tekrar)</label>
                        <input
                            type="password"
                            value={passwords.confirm}
                            onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                        />
                    </div>
                </div>
                <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition">Şifreyi Güncelle</button>
            </div>

            {/* Bildirim Tercihleri */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Bildirim Tercihleri</h2>
                <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={notifications.email} onChange={e => setNotifications(n => ({ ...n, email: e.target.checked }))} />
                        E-posta ile bildirim al
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={notifications.inApp} onChange={e => setNotifications(n => ({ ...n, inApp: e.target.checked }))} />
                        Platform içi bildirim al
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={notifications.investment} onChange={e => setNotifications(n => ({ ...n, investment: e.target.checked }))} />
                        Yatırım fırsatlarından haberdar ol
                    </label>
                </div>
            </div>

            {/* Proje Katılım Ayarları */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Proje Katılım Ayarları</h2>
                <div className="mb-2">Katılmak istediğin proje türleri ve beceri alanlarını seç:</div>
                <div className="flex flex-wrap gap-2">
                    {skillTags.map(tag => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => setSkills(skills.includes(tag) ? skills.filter(t => t !== tag) : [...skills, tag])}
                            className={`px-3 py-1 rounded-full border text-sm font-medium transition ${skills.includes(tag) ? "bg-primary text-white border-primary" : "bg-gray-50 border-gray-200 text-gray-700"}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Lisans ve Gizlilik */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Lisans & Gizlilik</h2>
                <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" checked={license.shareIdeas} onChange={e => setLicense(l => ({ ...l, shareIdeas: e.target.checked }))} />
                    Fikirlerimi platformda lisanslayıp paylaşabilirim
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" checked={license.dataShare} onChange={e => setLicense(l => ({ ...l, dataShare: e.target.checked }))} />
                    Verilerimin analiz amaçlı paylaşılmasına izin veriyorum
                </label>
            </div>

            {/* Hesap İşlemleri */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                <h2 className="font-bold text-xl mb-4 text-primary">Hesap İşlemleri</h2>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition mr-4">Hesabı Sil</button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">Çıkış Yap</button>
            </div>
        </div>
    );
};

export default Settings;