import { ColumnContainer, ColumnTitle } from "./styles"
import React from "react"

interface ColumnProps {
  text: string;
}

export const Column = ({
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}
