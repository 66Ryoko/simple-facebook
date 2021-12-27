import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";

const ResponsiveAppBar = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSwitchUserMenu = (event, user) => {
        props.switchUserFunc(user);
        handleCloseUserMenu();
    };

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <FacebookIcon fontSize="large" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, px: 2 }}
                    >
                        Facebook
                    </Typography>
                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", textAlign: "center" }}>
                        <Box>
                            {props.currentUser &&
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ px: 2 }}
                                >
                                    {props.currentUser.name}
                                </Typography>
                            }
                        </Box>
                        <Box>
                            <Tooltip title="Open settings">
                                <AccountCircleIcon onClick={handleOpenUserMenu} sx={{ p: 0 }} fontSize="large" />
                            </Tooltip>
                        </Box>
                        <Box>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText>Profile</ListItemText>
                                </MenuItem>
                                <Divider />
                                {props.currentUser.id && props.userDatas &&
                                    props.userDatas.filter(user => user.id !== props.currentUser.id).map(user => (
                                        <MenuItem key={user.id} onClick={(event) => handleSwitchUserMenu(event, user)}>
                                            <ListItemIcon>
                                                <AccountCircleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={user.name} secondary={user.email} />
                                        </MenuItem>
                                    ))
                                }
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText>Log out</ListItemText>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
