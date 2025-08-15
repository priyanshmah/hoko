"use client";

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function AnnouncementBar() {
  return (
    <Carousel
        className="bg-light-pink text-dark-gray-color text-xs font-bold p-2 text-center"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>FREE SHIPPING</CarouselItem>
          <CarouselItem>CASH ON DELIVERY</CarouselItem>
          <CarouselItem>Get ₹100 off on your first purchase</CarouselItem>
        </CarouselContent>
      </Carousel>
  )
}

export default AnnouncementBar