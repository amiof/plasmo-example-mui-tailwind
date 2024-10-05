import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import "./style.css"
import icon from "data-base64:~/icon-48.png"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-[400px] h-[700px] ">
      <img src={icon}/>
      <Stack minWidth={240}>
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

        <div className="bg-black text-blue-500" >this is test </div>
        <div className="bg-red-500 " style={{ color: "red" }}>this is test </div>
      </Stack>
    </div>
  )
}

export default IndexPopup
