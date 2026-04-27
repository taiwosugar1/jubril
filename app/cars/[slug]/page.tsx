// app/cars/[slug]/page.tsx
'use client';

import CarDetailPage from '@/components/Cardetailpage'
import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams()
    const slug = params?.slug as string || ''

    return (
        <div>
            <CarDetailPage slug={slug} />
        </div>
    )
}