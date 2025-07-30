import type { ReactNode } from "react";
import { MyContext } from "./Context";
import ky from "ky";
import { useEffect, useReducer } from "react";
import { contextReducer } from "./ContextReducer";
import type { Launch } from "./types";

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(contextReducer, {
    data: null,
    selectedMission: null,
    isOpen: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await ky
        .get("https://api.spacexdata.com/v3/launches", {
          searchParams: { launch_year: "2020" },
        })
        .json<any[]>();

      const cleanedData: Launch[] = rawData.map((launch) => ({
        flight_number: launch.flight_number,
        launch_date_unix: launch.launch_date_unix,
        mission_name: launch.mission_name,
        rocket: {
          rocket_name: launch.rocket?.rocket_name,
        },
        links: {
          mission_patch: launch.links?.mission_patch,
          mission_patch_small: launch.links?.mission_patch_small,
        },
        details: launch.details,
        isOpen: false,
      }));

      dispatch({ type: "SET_DATA", payload: cleanedData });
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        data: state.data,
        selectedMission: state.selectedMission,
        isOpen: state.isOpen,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
