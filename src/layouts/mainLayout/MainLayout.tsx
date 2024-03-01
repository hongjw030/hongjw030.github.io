import { PropsWithChildren } from "react";
import Styles from "./MainLayout.module.scss";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <section className={Styles["main-container"]}>
      <></>
      {children}
    </section>
  );
}
