import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useState } from "react"

import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"


export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
getStyle()
const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "plasmo-mui-cache",
  prepend: true,
  container: styleElement
})

// export const getStyle = () => styleElement

function PlasmoOverlay() {
  const [data, setData] = useState("")

  return (
    <CacheProvider value={styleCache}>
      <Stack minWidth={240} bgcolor={"white"} padding={2}>
        <Typography variant="h6">
          Welcome to your{" "}
          <Link href="https://www.plasmo.com" target="_blank">
            Plasmo
          </Link>{" "}
          Extension!
        </Typography>
        <Input onChange={(e) => setData(e.target.value)} value={data} />
        <Button href="https://docs.plasmo.com" target="_blank">
          View Docs
        </Button>
      </Stack>
      <div className="bg-red-500 text-blue-500" style={{color:"red"}}>this is test </div>
      <div className="bg-red-500 text-blue-500">this is test </div>
    </CacheProvider>
  )
}

export default PlasmoOverlay
