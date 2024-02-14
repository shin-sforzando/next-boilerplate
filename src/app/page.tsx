import { Card, CardBody, CardHeader } from "@chakra-ui/react"

const Page = async () => {
  const dummyUsers = await (
    await fetch("https://dummyjson.com/users", { cache: "force-cache" })
  ).json()

  return (
    <>
      <Card align="center" bgGradient="radial(gray.300, blue.400, pink.200)">
        <CardHeader>Dummy Users</CardHeader>
        <CardBody>{JSON.stringify(dummyUsers, null, 2)}</CardBody>
      </Card>
    </>
  )
}

export default Page
