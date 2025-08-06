
import React, { useState, useEffect } from "react";
import IdeaCard from "@/components/shared/ideaCard";
import Button from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ideasService, Idea } from "@/services/ideas";
import Link from "next/link";

// İçerik yüklenirken gösterilecek loading state
const LoadingState: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
);

const Ideas: React.FC = () => {
  const router = useRouter();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        setLoading(true);
        const data = await ideasService.getMyIdeas();
        setIdeas(data);
        setError(null);
      } catch (err: any) {
        setError(err?.response?.data?.message || "Fikirler yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Bu fikri silmek istediğinize emin misiniz?")) {
      try {
        await ideasService.deleteIdea(id);
        setIdeas(prev => prev.filter(idea => idea.id !== id));
      } catch (err: any) {
        console.error("Fikir silinemedi:", err);
        alert(err?.response?.data?.message || "Fikir silinirken bir hata oluştu");
      }
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/ideas/${id}/edit`);
  };

  return (
    <div className="py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Yüklediğiniz Fikirler</h1>
        <Button variant="primary" onClick={() => router.push("/ideas/create")}>
          Yeni Fikir Ekle
        </Button>
      </div>

      {loading ? (
        <LoadingState />
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center text-red-600 text-lg">
          {error}
        </div>
      ) : ideas.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-lg shadow">
          Henüz bir fikriniz yok. Yeni bir fikir ekleyin!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea) => (
            <Link key={idea.id} href={`/ideas/${idea.id}`}>
              <div className="relative group">
                <IdeaCard {...idea} />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                  <Button
                    variant="secondary"
                    className="rounded-full p-2"
                    onClick={() => handleEdit(idea.id)}
                  >
                    <Icon icon="hugeicons:edit-01" width={20} height={20} />
                  </Button>
                  <Button
                    variant="secondary"
                    className="rounded-full p-2"
                    onClick={() => handleDelete(idea.id)}
                  >
                    <Icon icon="hugeicons:delete-02" width={20} height={20} />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ideas;