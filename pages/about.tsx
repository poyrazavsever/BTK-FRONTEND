import React from "react";

const team = [
  {
    name: "Poyraz Avsever",
    role: "UI/UX Designer Frontend Developer",
    img: "/images/defaultAvatar.png",
  },
  {
    name: "Halitcan Emir",
    role: "Backend Developer",
    img: "/images/defaultAvatar.png",
  },
  {
    name: "Talha Tarlabaz",
    role: "Backend Developer",
    img: "/images/defaultAvatar.png",
  },
];

const About = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero/Intro */}
      <section className="w-full max-w-3xl mx-auto py-16 flex flex-col items-center justify-center">
        <h1 className="text-header font-bold text-3xl md:text-5xl text-center mb-4">
          Proje Hakkında
        </h1>
        <p className="text-text text-base text-center mb-8 max-w-2xl">
          Kullanıcılar, karşılaştıkları problemleri çözüm fikirleri olarak
          siteye yükleyebiliyor; bu fikirler analiz edilip lisanslanıyor ve
          geliştiricilere sunuluyor. Tamamlanan projeler yatırımcılara açılıyor
          ve sürdürülebilir ürünlerin ortaya çıkmasına öncülük ediliyor.
        </p>
      </section>

      {/* Ekip */}
      <section className="w-full py-4 flex flex-col items-center">
        <h2 className="text-header font-bold text-2xl text-center mb-10">
          Ekip
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white rounded-2xl border border-neutral-200 p-8 w-64 min-h-64"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-primary/20 shadow"
              />
              <div className="font-semibold text-header text-lg mb-1">
                {member.name}
              </div>
              <div className="text-text text-base text-center">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
