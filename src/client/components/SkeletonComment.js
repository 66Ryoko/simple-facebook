import * as React from "react";
import SkeletonCardHeader from "./SkeletonCardHeader";
import Card from "@mui/material/Card";

export default function SkeletonComment() {
  return (
    <Card sx={{ width: "100%", margin: "0px" }}>
      <SkeletonCardHeader />
    </Card>
  );
}
