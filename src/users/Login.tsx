import React from 'react'
import 로고후보 from "../image/bitcosLogo-blue.png";
import 유저아이콘 from "../image/userIcon.png";
import 비밀번호아이콘 from "../image/pwIcon.png"
import { Container, Paper, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import "./LogIn.css";

const LogIn : React.FC = () => {
  return (
    <div className='LogIn-Container' style={{width:"100%"}}>
      <a className="logo" href="/"><img src={로고후보} alt="비트코스로고" style={{ width:"10vw",height:"auto"}}/></a>

      <Container component="main" maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom>
            로그인
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="이메일"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            type="password"
          />
          <br />

          <div className='checkBox-Containder'>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="이메일 저장"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 상태 유지"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="IP보안 ON"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, backgroundColor: '#03a9f4' }}
          >
            로그인
          </Button>
        </Paper>
      </Container>
    </div>
  )
}
export default LogIn;