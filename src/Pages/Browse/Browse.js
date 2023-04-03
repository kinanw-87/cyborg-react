import "./Browse.css";
import {
  Featured,
  TopDownloaded,
  StartStream,
  MostPopLiveStream,
} from "../../sections";

const Browse = () => {
  return (
    <>
      <Featured />
      <TopDownloaded />
      <StartStream />
      <MostPopLiveStream />
    </>
  );
};
export default Browse;
