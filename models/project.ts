import { StaticImageData } from "next/image";

export interface Project{
    title: string,
    description: string,
    imgUrl: StaticImageData,
    explanation?: string,
    isDownloadable: boolean,
    link?: string,
    videoUrl?: string,
    haveModal: boolean
}