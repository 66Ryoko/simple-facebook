import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";

export default function Comment(props) {
  return (
    <Card sx={{ width: "100%", margin: "0px" }}>
      <CardHeader
        avatar={
          <AccountCircleIcon fontSize="medium" />
        }
        title={props.comment.name}
        subheader={props.comment.email}
      />
      <CardContent>
        <Typography variant="body2">
          {props.comment.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
