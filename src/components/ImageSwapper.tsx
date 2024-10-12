'use client'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-6.jpg'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ImageSwapper() {
  const images = [
    { image: image6, rotation: '-rotate-2' },
    { image: image1, rotation: 'rotate-2' },
    { image: image4, rotation: '-rotate-2' },
    { image: image3, rotation: 'rotate-2' },
    { image: image5, rotation: '-rotate-2' },
    { image: image2, rotation: 'rotate-2' },
  ]

  const [currentIdx, setCurrentIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        if (currentIdx === images.length - 1) {
          setCurrentIdx(0)
        } else {
          setCurrentIdx((prev) => prev + 1)
        }
        setFade(true)
      }, 500) // The duration should match the CSS transition time
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIdx, images.length])

  return (
    <>
      <Image
        quality={100}
        src={images[currentIdx].image}
        alt=""
        sizes="(min-width: 1024px) 32rem, 20rem"
        className={`aspect-square ${images[currentIdx].rotation} transform rounded-2xl bg-zinc-100 object-cover transition-opacity duration-500 dark:bg-zinc-800 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}
