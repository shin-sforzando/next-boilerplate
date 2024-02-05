import { AbsoluteCenter, Badge, Box } from "@chakra-ui/react"

const EnvIndicator = () => {
  return (
    <>
      <Box position="relative" h="50px">
        <AbsoluteCenter axis="both">
          <Badge variant="outline">{process.env.NODE_ENV}</Badge>
        </AbsoluteCenter>
      </Box>
    </>
  )
}

export default EnvIndicator
