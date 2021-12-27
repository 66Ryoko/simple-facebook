import * as React from "react";
import SkeletonCardHeader from "./SkeletonCardHeader";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonPost() {
  return (
    <Card sx={{ width: "100%", margin: "15px" }}>
      <SkeletonCardHeader />
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
    </Card>
  );
}
