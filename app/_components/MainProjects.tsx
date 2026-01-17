'use client';

import { useTranslation } from "react-i18next";
import { projects } from "@/constants/projects";
import { Sparkles, ExternalLink, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MainProjectsProps {
  projectTitles: string[];
}

const MainProjects = ({ projectTitles }: MainProjectsProps) => {
  const { t } = useTranslation();

  const findProject = (title: string) => {
    for (const category of projects.categories) {
      const categoryProjects = projects[category];
      if (!categoryProjects) continue;
      for (const division of projects.divisions) {
        const divisionProjects = categoryProjects[division];
        if (!divisionProjects) continue;
        const project = divisionProjects.find(p => p.title === title);
        if (project) return { ...project, category };
      }
    }
    return null;
  };

  const foundProjects = projectTitles
    .map(title => findProject(title))
    .filter(Boolean);

  if (foundProjects.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-purple-950/5 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-linear-to-r from-purple-900/30 to-pink-900/30 
                          border border-purple-500/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              {t('mainProjects.badge')}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 
                           bg-clip-text text-transparent">
              {t('mainProjects.title')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {foundProjects.map((project, index) => {
            if (!project) return null;

            const safeKey = String(project.title).replace(/\./g, "_");
            const basePath = `projects.${project.category}.${safeKey}`;
            const title = t(`${basePath}.title`, { defaultValue: project.title });
            const description = t(`${basePath}.description`, { defaultValue: project.description || "" });
            const explanation = t(`${basePath}.explanation`, { defaultValue: project.explanation || "" });

            return (
              <div
                key={project.title}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 
                              rounded-2xl opacity-0 group-hover:opacity-20 blur-xl 
                              transition-all duration-500" />
                
                <div className="relative bg-linear-to-br from-purple-900/20 to-pink-900/20 
                              border border-purple-500/30 backdrop-blur-sm
                              rounded-2xl overflow-hidden
                              hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]
                              transition-all duration-500">
                  
                  {project.videoUrl && (
                    <div className="relative aspect-video overflow-hidden">
                      <iframe
                        key={project.videoUrl}
                        src={project.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={title}
                      />
                    </div>
                  )}

                  {!project.videoUrl && project.imgUrl && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.imgUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 
                                 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent 
                                    opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 
                                 bg-clip-text text-transparent">
                      {title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {description}
                    </p>

                    {explanation && (
                      <div className="pt-4 space-y-3">
                        <h4 className="text-lg font-semibold text-purple-400">Sobre o Projeto</h4>
                        <div 
                          className="text-gray-300 leading-relaxed text-sm"
                          dangerouslySetInnerHTML={{ __html: explanation }}
                        />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.link && !project.isDownloadable && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg
                                   bg-purple-900/30 hover:bg-purple-900/50
                                   border border-purple-500/30 hover:border-purple-500/60
                                   text-white text-sm font-medium
                                   transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('projects.openProject')}
                        </Link>
                      )}

                      {project.isDownloadable && project.link && (
                        <Link
                          href={project.link}
                          download
                          className="flex items-center gap-2 px-4 py-2 rounded-lg
                                   bg-purple-900/30 hover:bg-purple-900/50
                                   border border-purple-500/30 hover:border-purple-500/60
                                   text-white text-sm font-medium
                                   transition-all duration-300 hover:scale-105"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 z-10 w-12 h-12 rounded-full 
                              bg-linear-to-br from-purple-600 to-pink-600 
                              flex items-center justify-center
                              shadow-[0_0_30px_rgba(147,51,234,0.6)]
                              group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" />
          <div className="h-px w-32 bg-linear-to-r from-transparent via-pink-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default MainProjects;