import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
  className?: string;
  imageClassName?: string;
  showDecorativeElements?: boolean;
  altPrefix?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  imageClassName = "",
  showDecorativeElements = true,
  altPrefix = "Foto",
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll infinito
  React.useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Avança a cada 4 segundos (mais tempo para transição suave)

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className={`relative flex justify-center overflow-visible ${className}`}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          duration: 35, // Duração da animação de scroll (maior = mais lento e suave)
          dragFree: false,
        }}
        className="w-full max-w-[90vw] lg:max-w-[1200px] overflow-visible"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => {
            const isCenter = current === index;
            return (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-2/3 xl:basis-1/2 pl-2 md:pl-4">
                <div className={`transition-all duration-700 ease-in-out ${isCenter ? "py-6 md:py-8" : "py-2"}`}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent
                      className={`flex aspect-[3/4] lg:aspect-[4/5] items-center justify-center p-0 relative group transition-all duration-700 ease-in-out ${
                        isCenter
                          ? "scale-110 z-10"
                          : "scale-90 opacity-70"
                      }`}
                    >
                      <div
                        className={`absolute -inset-2 transition-all rounded-2xl duration-700 ease-in-out ${
                          isCenter
                            ? "opacity-100 scale-110"
                            : "opacity-60 group-hover:opacity-100"
                        }`}
                      ></div>
                      <div
                        className={`relative overflow-hidden rounded-xl transition-all duration-1000 ease-in-out w-full h-full ${
                          isCenter
                            ? "group-hover:scale-105"
                            : "group-hover:scale-105"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${altPrefix} ${index + 1}`}
                          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${imageClassName}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {showDecorativeElements && (
        <>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gold/20 rounded-full animate-pulse z-5"></div>
          <div className="absolute -bottom-4 -right-6 w-10 h-10 bg-gold/30 rounded-full animate-pulse delay-1000 z-5"></div>
        </>
      )}
    </div>
  );
};

