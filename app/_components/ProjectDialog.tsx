import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ExternalLink, Download, Play, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Project } from "@/models/project";

interface ProjectDialogProps {
  projectKey?: string;
  category: string;
  project?: Project;
  imgUrl: StaticImageData;
  link?: string;
  videoUrl?: string;
  isDownloadable?: boolean;
  haveModal?: boolean;
}

export const ProjectDialog = ({
  projectKey,
  category,
  project,
  imgUrl,
  link,
  videoUrl,
  isDownloadable,
  haveModal = false,
}: ProjectDialogProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const resolvedKey = projectKey ?? (project && (project.title)) ?? "";
  const safeKey = String(resolvedKey).replace(/\./g, "_");
  const basePath = resolvedKey ? `projects.${category}.${safeKey}` : null;
  const title = basePath ? t(`${basePath}.title`) : (project?.title ?? "No title");
  const description = basePath ? t(`${basePath}.description`) : (project?.description ?? "");
  const explanation = basePath ? t(`${basePath}.explanation`, { defaultValue: "" }) : (project?.explanation ?? "");

  const processClick = () => {
    if (haveModal) {
      setIsOpen(true);
      return;
    }

    if (category === "web_development" && link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          onClick={processClick}
          className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-900/20 to-pink-900/20 
                     border border-purple-500/30 backdrop-blur-sm
                     hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]
                     transition-all duration-500 ease-out
                     h-full w-full cursor-pointer"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 
                         group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent 
                            opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 
                              animate-pulse" />
            </div>
            {videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/80 backdrop-blur-sm
                                flex items-center justify-center
                                group-hover:scale-110 group-hover:bg-pink-600/80
                                transition-all duration-300
                                shadow-[0_0_30px_rgba(147,51,234,0.6)]">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            )}
          </div>
          <div className="p-6 space-y-2">
            <h4 className="text-xl font-bold text-white group-hover:text-transparent 
                           group-hover:bg-linear-to-r group-hover:from-purple-400 
                           group-hover:via-pink-400 group-hover:to-purple-400
                           group-hover:bg-clip-text
                           transition-all duration-300 line-clamp-1">
              {title}
            </h4>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 
                          transition-colors duration-300 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-medium pt-2
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {haveModal ? (
                <>
                  <span>Ver detalhes</span>
                  <ExternalLink className="w-4 h-4" />
                </>
              ) : link ? (
                <>
                  <span>Abrir projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </>
              ) : null}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-linear-to-bl from-purple-600/30 to-transparent rounded-bl-full" />
          </div>
        </button>
      </DialogTrigger>

      {haveModal && (
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-black/95 border-purple-500/30 
                                   backdrop-blur-xl text-white [&>button]:hidden">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-3xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 
                                     bg-clip-text text-transparent">
              {title}
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-50 rounded-full p-2
                        bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30
                        transition-all duration-300 hover:rotate-90 cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <DialogDescription className="text-gray-300 text-base leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {videoUrl && (
              <div className="relative aspect-video rounded-xl overflow-hidden 
                              border border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                {!isVideoPlaying ? (
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                    <Image
                      src={imgUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-purple-600/80 backdrop-blur-sm
                                      flex items-center justify-center
                                      group-hover:scale-110 group-hover:bg-pink-600/80
                                      transition-all duration-300
                                      shadow-[0_0_40px_rgba(147,51,234,0.8)]">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )}
              </div>
            )}
            {!videoUrl && imgUrl && (
              <div className="relative aspect-video rounded-xl overflow-hidden 
                              border border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <Image
                  src={imgUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {explanation && (
              <div className="space-y-3 p-6 rounded-xl bg-linear-to-br from-purple-900/10 to-pink-900/10 
                              border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400">Sobre o Projeto</h3>
                <div 
                  className="text-gray-300 leading-relaxed [&_br]:block [&_br]:my-2"
                  dangerouslySetInnerHTML={{ __html: explanation }}
                />
              </div>
            )}
            <div className="flex flex-wrap gap-4 pt-4">
              {isDownloadable && link && (
                <a
                  href={link}
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-lg
                             bg-purple-900/30 hover:bg-purple-900/50
                             border border-purple-500/30 hover:border-purple-500/60
                             text-white font-medium
                             transition-all duration-300
                             hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};