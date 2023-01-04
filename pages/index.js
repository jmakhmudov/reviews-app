import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../components/Navbar';

export default function Home() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Navbar user = {user}/>
      <h1>Main Page</h1>
      
    </>
  )
}
