import { useRouter } from "next/router"

export default function Section() {
    const router = useRouter()

    return (
        <>
            <h1>{router.query.section}</h1>
        </>
    )
}