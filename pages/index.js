import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../components/Navbar';
import ReviewCard from "../components/Card"
import { PrismaClient } from '@prisma/client';

export default function Home({reviews}) {
  const { user, error, isLoading } = useUser();
  const data = JSON.parse(reviews)

  return (
    <>
      <Navbar user = {user}/>

      <h1>Main Page</h1>
      <ReviewCard review={data[0]}/>
      
    </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()

  const data = await prisma.reviews.findMany()
  const reviews = await JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v}#bigint` : v).replace(/"(-?\d+)#bigint"/g, (_, a) => a)
  return {

    props :{
      reviews
    }

  }
}