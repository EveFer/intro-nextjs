import React from 'react'
import { useRouter } from 'next/router'

export default function Detail() {
    const router = useRouter()
    console.log(router.query.id)
    return (
        <div>
            <h2>Producto por id {router.query.id}</h2>
        </div>
    )
}
