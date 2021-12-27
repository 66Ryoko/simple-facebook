import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonCardHeader() {
  return (
    <CardHeader
      avatar={
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      }
      title={
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      }
      subheader={
        <Skeleton animation="wave" height={10} width="40%" />
      }
    />
  );
}
