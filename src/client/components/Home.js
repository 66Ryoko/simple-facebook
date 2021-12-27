import React, { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "./AppBar";
import Post from "./Post";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SkeletonPost from "./SkeletonPost";

function Home() {

  const [postDatas, setPostDatas] = useState(null);
  const [userDatas, setUserDatas] = useState(null);
  const [userMap, setUserMap] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  const reqPosts = axios.get("https://jsonplaceholder.typicode.com/posts");
  const reqUsers = axios.get("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    axios
      .all([reqPosts, reqUsers])
      .then(
        axios.spread((...res) => {
          setPostDatas(res[0].data || []);
          setUserDatas(res[1].data || []);
          setUserMap(getUserMap(res[1].data));
        })
      )
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const getUserMap = (users) => {
    let map = new Map();
    if (users && users.length > 0) {
      users.forEach(user => map.set(user.id, user));
      switchUser(users[0]);
    }
    return map;
  }

  const getUserById = (userId) => {
    return userMap ? userMap.get(userId) : "";
  }

  const switchUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <div>
      <AppBar currentUser={currentUser} userDatas={userDatas} switchUserFunc={switchUser} />
      <Container maxWidth="md" sx={{ mt: "75px" }}>
        <Box>
          {postDatas ? (postDatas.map(function (post) {
            let author = getUserById(post.userId) || { name: "User", email: "" };
            return <Post key={post.id} post={post} author={author} />
          })) : (
            <SkeletonPost />
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Home;