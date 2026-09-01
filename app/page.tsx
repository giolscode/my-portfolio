import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects, skillGroups, timelineItems, diplomas } from "@/lib/data";

function SectionHeading({
  title,
  dotClass = "bg-[#F97316]",
}: {
  title: string;
  dotClass?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#151310]">
        {title}
      </h2>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 sm:w-16 bg-black/10" />
      <span className="font-mono text-xs text-[#F97316]/60">•</span>
      <span className="h-px w-10 sm:w-16 bg-black/10" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#151310]">
      <Header />
      <Hero />

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Parcours */}
        <section id="parcours" className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              title="Parcours professionelles"
              dotClass="bg-[#F97316]"
            />
            <p className="text-sm text-black/50 max-w-md mb-6">
              Expériences professionnelles
            </p>
            <Timeline items={timelineItems} />
          </Reveal>
        </section>

        <SectionDivider />

        {/* Skills */}
        <section id="skills" className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              title="Compétences techniques"
              dotClass="bg-[#F97316]"
            />
            <p className="text-sm text-black/50 max-w-md mb-6">
              Technologies utilisées en projets réels.
            </p>
            <SkillsGrid groups={skillGroups} />
          </Reveal>
        </section>

        <SectionDivider />

        {/* Projets */}
        <section id="projets" className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading title="Projets" />
            <p className="text-sm text-black/50 max-w-md mb-6">
              Différents projets réalisés.
            </p>
            <Carousel opts={{ align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {projects.map((project, i) => (
                  <CarouselItem
                    key={project.title}
                    className="pl-4 basis-[70%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard
                      index={String(i + 1).padStart(2, "0")}
                      title={project.title}
                      imageSrc={project.imageSrc}
                      description={project.description}
                      linkUrl={project.linkUrl}
                      technos={project.technos}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-x-0 translate-y-0 rounded-full border-black/15 bg-transparent text-black/60 shadow-none hover:border-[#F97316] hover:text-[#F97316] hover:bg-transparent" />
                <CarouselNext className="static translate-x-0 translate-y-0 rounded-full border-black/15 bg-transparent text-black/60 shadow-none hover:border-[#F97316] hover:text-[#F97316] hover:bg-transparent" />
              </div>
            </Carousel>
          </Reveal>
        </section>

        <SectionDivider />

        {/* Diplômes */}
        <section id="diplomes" className="py-16 sm:py-20">
          <Reveal>
            <SectionHeading title="Diplômes" dotClass="bg-[#F97316]" />
            <p className="text-sm text-black/50 max-w-md mb-6">
              Formations suivies.
            </p>
            <Timeline
              items={diplomas}
              accentClass="border-[#F97316]/30 bg-[#F97316]/[0.08] text-[#F97316]"
            />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
