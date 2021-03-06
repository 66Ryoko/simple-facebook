import * as React from "react";
import axios from "axios";
import SkeletonComment from "./SkeletonComment";
import Comment from "./Comment";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    getComments();
  };

  const getComments = () => {
    if (!comments && props.post.id) {
      axios("https://jsonplaceholder.typicode.com/comments?postId=" + props.post.id).then(
        (res) => {
          setComments(res.data);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching data: ", error);
        }
      );
    }
  }

  return (
    <Card sx={{ width: "100%", margin: "15px" }}>
      <CardHeader
        avatar={
          <AccountCircleIcon fontSize="large" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.author.name}
        subheader={props.author.email}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {props.post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton aria-label="share">
          <SendIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {
        expanded &&
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {
            comments && (
              <CardContent>
                {comments.map(comment => (<Comment key={comment.id} comment={comment} />))}
              </CardContent>
            )}
          {
            !comments && loading && (
              <SkeletonComment />
            )}
        </Collapse>
      }
    </Card>
  );
}
