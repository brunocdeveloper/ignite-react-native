import React from "react";
import { Container } from "./styles";

interface BulletProps {
  active?: boolean;
}

const Bullet = (props: BulletProps) => {
  const { active = false } = props;
  return <Container active={active} />;
};

export default Bullet;
