import Image from 'next/image';

const experiences = [
    {
      role: "Waitress",
      company: "Rhykantine",
      period: "2024 – Present",
      description: "Delivering great energy and service in a busy restaurant environment.",
      image: "/experience/Rhykantine.jpg",
    },
    {
      role: "Bartender & Event Host",
      company: "Private Parties",
      period: "2023 – Present",
      description: "Creating memorable nights for guests across Schaffhausen.",
      image: "/experience/bartender.png",
    },
    {
      role: "Customer Service",
      company: "Eurofit Gym",
      period: "2024 – Present",
      description: "Helping members feel welcome and supported.",
      image: "/experience/eurofit.png",
    },
    {
      role: "Communications & Marketing Intern",
      company: "Schaffhausen Theater",
      period: "2025",
      description: "Content creation, social media, and audience engagement.",
      image: "/experience/theater.png",
    },
  ];

  export function Experience() {
    return (
      <section id="experience" className="section py-24 bg-[#F8F4F0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="heading text-6xl font-bold mb-12">Experience</h2>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="flex items-start gap-5 border-l-4 border-[#C97D5B] pl-6">
                {exp.image ? (
                  <div className="relative h-16 w-16 shrink-0 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#6B8E73]/15 text-[#6B8E73] text-2xl font-semibold ring-1 ring-[#6B8E73]/20"
                    aria-hidden="true"
                  >
                    {exp.company.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-3 md:gap-6 flex-1">
                  <div className="md:w-48 font-medium text-lg shrink-0">{exp.period}</div>
                  <div>
                    <div className="font-semibold text-xl">{exp.role}</div>
                    <div className="text-[#6B8E73]">{exp.company}</div>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
