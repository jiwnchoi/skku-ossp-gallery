import { Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SKKU OSSP Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text fontWeight={600} fontSize={48}>Hello World</Text>
    </div>
  )
}
