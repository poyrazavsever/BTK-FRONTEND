import React from "react";

const companies = [
  { name: "OMEDYA", img: "/companies/image 1.png" },
  { name: "OSTİM TEKNİK ÜNİVERSİTESİ", img: "/companies/image 2.png" },
  { name: "OSTİM OSB", img: "/companies/image 3.png" },
  { name: "ARC DIŞ TİCARET", img: "/companies/image 4.png" },
  { name: "MELSİS", img: "/companies/image 5.png" },
];

const Companies = () => {
  return (
    <section
      className="w-full py-8 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/companies.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <h2 className="text-center text-lg font-medium text-text mb-10">
        Bize Güvenen Yatırımcılarımız
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-6xl mx-auto">
        {companies.map((company) => (
          <div key={company.name} className="flex flex-col items-center z-50">
            <img
              src={company.img}
              alt={company.name}
              className="h-4 md:h-12 object-contain grayscale-100 opacity-80 mb-2"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
