import styles from "./Cards.module.css";
import { Card } from "@mantine/core";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const Cards = () => {
  const context = useContext(MyContext);
  if (!context) return null;

  const { data } = context;

  if (data) console.log(data);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>SpaceX Launches 2020</h1>
      <div className={styles.wrapper__cards}>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
        <Card
          style={{ width: "300px", height: "200px" }}
          shadow="sm"
          padding="md"
          radius="md"
          withBorder
        >
          <h3>Launch 1</h3>
          <p>Details about this launch...</p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
