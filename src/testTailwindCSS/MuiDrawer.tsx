import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import 로고후보 from "../image/bitLogo-white.png";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', position: "relative" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* {['모의 선물거래소', '트레이딩 지표', '커뮤니티 게시판', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Virtual-Future-Trading">
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
            
            <ListItem key="virtual-trading" disablePadding>
              <ListItemButton component={Link} to="/Virtual-Future-Trading">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="모의 선물거래소" />
              </ListItemButton>
            </ListItem>

            <ListItem key="trading-indicators" disablePadding>
              <ListItemButton component={Link} to="/Trading-Indicators">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="트레이딩 지표" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
          <List>
            {/* {['로그인', '회원가입', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}

            <ListItem key="virtual-trading" disablePadding>
              <ListItemButton component={Link} to="/LogIn">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="로그인" />
              </ListItemButton>
            </ListItem>

            <ListItem key="trading-indicators" disablePadding>
              <ListItemButton component={Link} to="/SignUp">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="회원가입" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          메인
        </Typography>
        <Typography paragraph>
          메인2
        </Typography>
      </Box>
    </Box>
  );
}