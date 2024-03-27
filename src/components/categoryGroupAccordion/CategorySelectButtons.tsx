import { Button } from "@mui/material";
import { ReactNode } from "react";

interface MainCategorySelectButtonProps {
  title: string;
  mainCategory: string;
  onClick: any;
}

export default function MainCategorySelectButton({
  title,
  mainCategory,
  onClick,
}: MainCategorySelectButtonProps) {
  const handleClick = (e: any) => {
    const target = e.target;
    onClick((prev: any) => ({
      ...prev,
      groupPath: target.getAttribute("data-mainid"),
    }));
  };
  return (
    <Button
      onClick={handleClick}
      data-mainid={mainCategory}
      sx={{
        height: "40px",
      }}
    >
      {title}
    </Button>
  );
}
