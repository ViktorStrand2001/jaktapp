import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import Link from 'next/link'

export default async function Home(){

  const session = await getServerSession(options)

console.log(session?.user?.name)


  return (
    <MaxWidthWrapper>
      <div>
        {session ? <h1> hello {session?.user?.name}! </h1> : <h1> no </h1>}
      </div>
      <button>
        <Link href={"api/auth/signout"}>signout</Link>
      </button>
    </MaxWidthWrapper>
  )
}
