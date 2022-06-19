import type { NextPage } from "next";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const GrailGuidesHome: NextPage = () => {
  return (
    <div>
      <h1>Grail Guides</h1>
      <div>
        <ProgressBar/>
        <ProgressBar title={"Apagon"} progress={25}/>
        <ProgressBar title={"College"} progress={100}/>
      </div>
    </div>
  )
}

export default GrailGuidesHome