import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

interface Post {
    id: number;
    content: string;
  }

const CommunityBoard : React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState<string>('');
  
    const addPost = () => {
      if (newPost.trim() !== '') {
        const newPostItem: Post = { id: posts.length + 1, content: newPost };
        setPosts([...posts, newPostItem]);
        setNewPost('');
      }
    };


  return (
    <div>
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                커뮤니티 게시판
                </Typography>
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
                placeholder="새로운 글을 작성하세요..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                />
                <Button
                variant="contained"
                color="primary"
                onClick={addPost}
                >
                글 작성
                </Button>
                <List sx={{ marginTop: 2 }}>
                {posts.map((post) => (
                    <ListItem key={post.id}>
                    <ListItemText primary={post.content} />
                    </ListItem>
                ))}
                </List>
            </Paper>
        </Container>
    </div>
  )
}
export default CommunityBoard;
