'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string;
}

export function ImageWithFallback({
    src,
    fallbackSrc = 'https://images.unsplash.com/photo-1531297461136-82lw9b629124?auto=format&fit=crop&q=80&w=1000',
    alt,
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    return (
        <img
            {...props}
            src={hasError ? fallbackSrc : (imgSrc as string)}
            alt={alt}
            onError={(e) => {
                if (hasError) return; // Prevent infinite loop if fallback also fails
                setHasError(true);
                setImgSrc(fallbackSrc);
            }}
        />
    );
}
