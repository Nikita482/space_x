import styles from "./ModalPortal.module.css";
import { createPortal } from "react-dom";
import type { Launch } from "../context/types";
import { IconX } from "@tabler/icons-react";

type Props = {
  mission: Launch;
  onClose: () => void;
  "data-testid"?: string;
};

const modalDom = document.getElementById("modal") || document.body;

const ModalPortal = ({ mission, onClose, "data-testid": testId }: Props) => {
  if (!modalDom) return null;
  return createPortal(
    <section className={styles.wrapper} data-testid={testId}>
      <div className={styles.wrapper__modal}>
        <div className={styles.wrapper__header}>
          <h2>{mission.mission_name}</h2>

          <button onClick={onClose} aria-label="close">
            <IconX size={26} />
          </button>
        </div>

        <img
          className={styles.wrapper__foto}
          src={
            mission.links?.mission_patch || "https://via.placeholder.com/150"
          }
          alt={mission.mission_name}
        />

        <p className={styles.wrapper__textMain}>
          <span className={styles.wrapper__textLabel}>mission name:</span>
          <br />
          <span className={styles.wrapper__textValue}>
            {mission.mission_name}
          </span>
        </p>

        <p className={styles.wrapper__textMain}>
          <span className={styles.wrapper__textLabel}>rocket name:</span>
          <br />
          <span className={styles.wrapper__textValue}>
            {mission.rocket?.rocket_name || "Unknown"}
          </span>
        </p>

        <p className={styles.wrapper__textMain}>
          <span className={styles.wrapper__textLabel}>details:</span>
          <br />
          <span className={styles.wrapper__textValue}>{mission.details}</span>
        </p>
      </div>
    </section>,
    modalDom
  );
};

export default ModalPortal;
