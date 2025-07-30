import styles from "./Cards.module.css";
import { Card, Button } from "@mantine/core";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import ModalPortal from "../ui/ModalPortal";
import type { Launch } from "../context/types";

const Cards = () => {
  const context = useContext(MyContext);
  if (!context) return null;

  const { data, dispatch, selectedMission, isOpen } = context;

  const handleClick = (selectedMission: Launch) => {
    dispatch({ type: "SELECT_MISSION", payload: selectedMission });
    dispatch({ type: "TOGGLE_MODAL", payload: true });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>SpaceX Launches 2020</h1>

      <div className={styles.wrapper__cards}>
        {data?.map((item) => (
          <Card
            className={styles.wrapper__card}
            key={item.mission_name}
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
          >
            <img
              className={styles.wrapper__missionPatchSmall}
              src={
                item.links.mission_patch_small ||
                "https://images2.imgbox.com/9a/96/nLppz9HW_o.png"
              }
              alt={item.mission_name}
            />
            <h2 className={styles.wrapper__titileCard}>{item.mission_name}</h2>
            <p className={styles.wrapper__name}>{item.rocket.rocket_name}</p>

            <Button onClick={() => handleClick(item)}>See more</Button>
          </Card>
        ))}
      </div>

      {isOpen && selectedMission && (
        <ModalPortal
          data-testid="modal-portal"
          mission={selectedMission}
          onClose={() => dispatch({ type: "TOGGLE_MODAL", payload: false })}
        ></ModalPortal>
      )}
    </div>
  );
};

export default Cards;
