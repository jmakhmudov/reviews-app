import { useRouter } from "next/router"
import Navbar from "../../components/Navbar"
import { PrismaClient } from "@prisma/client"

export default function Review({review}) {
    const router = useRouter()

    return (
        <>
            <Navbar/>
            <h1>gjg</h1>
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

    if(!review[0].title) {
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