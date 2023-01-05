import { useRouter } from "next/router"
import Navbar from "../../../components/Navbar"

export default function Review() {
    const router = useRouter()
    const id = router.query.reviewId

    return (
        <>
            <Navbar/>
            <h1>{id}</h1>
        </>
    )
}