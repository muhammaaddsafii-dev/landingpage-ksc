'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Props {
  images: string[];
  alt: string;
}

const ProjectImageSlider = ({ images, alt }: Props) => {
  if (images.length === 0) return null;

  return (
    <Carousel className="w-full group/carousel relative rounded-3xl overflow-hidden shadow-medium border border-border/50">
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index}>
            <img
              src={url}
              alt={`${alt} - Foto ${index + 1}`}
              className="w-full h-auto aspect-video object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-none opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0" />
        </>
      )}
    </Carousel>
  );
};

export default ProjectImageSlider;
