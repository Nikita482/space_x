import "./App.css";
import HomePage from "./pages/HomePage";
// import ky from "ky";
// import { useEffect } from "react";

function App() {
  // type Launch = {
  //   links?: { mission_patch_small?: string };
  //   mission_name: string;
  //   rocket?: { rocket_name?: string };
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await ky
  //       .get("https://api.spacexdata.com/v3/launches", {
  //         searchParams: { launch_year: "2020" },
  //       })
  //       .json<Launch[]>();

  //     data.forEach((launch: any) => {
  //       console.log({
  //         patch: launch.links?.mission_patch_small,
  //         mission: launch.mission_name,
  //         rocket: launch.rocket?.rocket_name,
  //       });
  //     });
  //   };

  //   fetchData();
  // }, []);

  // Mantine
  return <HomePage />;
}

export default App;
