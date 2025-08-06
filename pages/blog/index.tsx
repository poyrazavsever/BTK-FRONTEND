import React, { useState, useMemo } from 'react';
import Button from '@/components/ui/button';
import { Icon } from '@iconify/react';

// Blog yazılarını şimdilik burada tutuyoruz, backendini yazmadık.
const blogPosts = [
    {
        id: 1,
        title: 'Gelecekteki hayalimiz bir topluluk oluşturmak',
        excerpt: 'İnanıyoruz ki gerçek inovasyon, farklı perspektiflerin bir araya gelmesiyle ortaya çıkar. Geliştirici topluluğumuz, sadece kod yazan bireyler değil, geleceği şekillendiren, problem çözen ve değer yaratan bir ekosistemdir.',
        date: '6 Ağustos 2025',
        author: 'Gelişiyor Ekibi',
        category: 'Topluluk',
        slug: 'gelecekteki-hayalimiz-bir-topluluk-olusturmak'
    }
];

const categories = [
    { name: 'Tümü', count: 1 },
    { name: 'Topluluk', count: 1 },
    { name: 'Teknoloji', count: 0 },
    { name: 'Girişimcilik', count: 0 },
    { name: 'Yazılım Geliştirme', count: 0 },
    { name: 'Yatırım', count: 0 },
];

const BlogIndex = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    // Filtrelenmiş blog yazılarını hesapla
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="w-full min-h-screen bg-background py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-header mb-4">
                        Blog
                    </h1>
                    <p className="text-text text-lg max-w-2xl mx-auto">
                        Gelişiyor ekibinden haberler, güncellemeler ve teknoloji dünyasından içgörüler
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Blog yazılarında ara..."
                                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Icon
                                    icon="mdi:search"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    width={20}
                                />
                            </div>
                        </div>

                        {/* Blog Posts */}
                        <div className="grid gap-8">
                            {filteredPosts.length === 0 ? (
                                <div className="text-center py-12 text-text">
                                    <p className="text-lg mb-2">Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
                                    <p className="text-sm">Farklı bir arama terimi veya kategori deneyebilirsiniz.</p>
                                </div>
                            ) : (
                                filteredPosts.map(post => (
                                    <article key={post.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-text mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Icon icon="mdi:calendar" className="text-primary" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Icon icon="mdi:account" className="text-primary" />
                                                    <span>{post.author}</span>
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold text-header mb-3 hover:text-primary transition-colors">
                                                <a href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </a>
                                            </h2>
                                            <p className="text-text mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <Button
                                                href={`/blog/${post.slug}`}
                                                variant="secondary"
                                            >
                                                Devamını Oku
                                            </Button>
                                        </div>
                                    </article>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80">
                        <div className="bg-white rounded-lg border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-header mb-4">
                                Kategoriler
                            </h2>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li key={category.name}>
                                        <button
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors ${category.name === selectedCategory ? 'text-primary font-medium' : 'text-text'
                                                }`}
                                        >
                                            <span>{category.name}</span>
                                            <span className="bg-gray-100 text-text text-sm px-2 py-1 rounded-full">
                                                {category.count}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogIndex;