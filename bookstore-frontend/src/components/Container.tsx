import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}
const Container = ({ children }: IContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
