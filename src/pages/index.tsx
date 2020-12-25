import { Flex, Heading } from '@chakra-ui/react'

import Main from '~/layouts/Main'

export default function Home() {
  return (
    <Main title="Dashboard">
      <Flex p={8}>
        <Heading>Home</Heading>
      </Flex>
    </Main>
  )
}
