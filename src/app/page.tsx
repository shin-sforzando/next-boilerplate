import EnvIndicator from "@/app/components/EnvIndicator"
import { Card, CardBody, CardHeader } from "@chakra-ui/react"

const getDummyUsers = async () => {
  const res = await fetch("https://dummyjson.com/users")
  console.log(res.status)
  return res.json()
}

const Page = async () => {
  const dummyUsers = await getDummyUsers()
  return (
    <>
      <Card align="center" bgGradient="radial(gray.300, blue.400, pink.200)">
        <CardHeader>Dummy Users</CardHeader>
        <CardBody>{JSON.stringify(dummyUsers, null, 2)}</CardBody>
      </Card>
      <EnvIndicator />
    </#jsx-fragment>
  )
}

export default Page
