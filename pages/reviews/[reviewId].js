import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import { PrismaClient } from "@prisma/client"

export default function Review({review}) {
    const router = useRouter()
    const id = router.query.reviewId

    return (
        <>
            <Navbar/>
            <h1>{id}</h1>
        </>
    )
}

export async function getStaticPaths() {

    return {
        //paths,
        paths: [],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const prisma = new PrismaClient()

    const id = await prisma.reviews.findUnique({
        where: {
          id: BigInt(params.reviewId),
        },
    })

    const review = await JSON.stringify(id, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v).replace(/"(-?\d+)#bigint"/g, (_, a) => a)

    const d = JSON.parse(review)


    if(!d) {
        return {
            notFound: true
        }
    }
    return {
        props :{
            review
        }
    }
}