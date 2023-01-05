import { useRouter } from "next/router"
import Navbar from "../../../components/Navbar"

export default function Section() {
    const router = useRouter()

    return (
        <>
            <Navbar/>
            <h1>{router.query.section}</h1>
        </>
    )
}