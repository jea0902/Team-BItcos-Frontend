import React, { useState } from 'react';
import 로고후보 from "../image/bitcosLogo-blue.png";
import { Container, Paper, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';

const SignUp : React.FC = () => {

  // 이메일 인증은 백엔드에서 구현할 것.
  // 이메일 저장과 로그인 유지 기능도 백엔드에서 구현
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [birthDateError, setBirthDateError] = useState<string>('');

  const isEmailValid = (email : string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password : string) => {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{1,20}$/;
    return passwordRegex.test(password);
  };

  const isBirthDateValid = (birthDate: string): boolean => {
    // YYYY-MM-DD 형식 체크 정규표현식
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(birthDate);
  };

  const handleSignUp = () => {
    if (isEmailValid(email) && isPasswordValid(password) && password === confirmPassword && isBirthDateValid(birthDate)) {
      // 회원가입 로직 구현
      console.log('회원가입 정보:', { email, password, confirmPassword, gender, birthDate });
    } else {
      // 유효성 검사 실패 시 에러 메시지 설정
      setEmailError(isEmailValid(email) ? '' : '유효한 이메일 주소를 입력해주세요.');
      setPasswordError(isPasswordValid(password) ? '' : '특수문자를 포함한 20자 이내의 비밀번호를 입력해주세요.');
      setConfirmPasswordError(password === confirmPassword ? '' : '비밀번호가 일치하지 않습니다.');
      setBirthDateError(isBirthDateValid(birthDate) ? '' : '올바른 생년월일 형식을 입력하세요.');
    }
  };

  return (
    <div className='SignUp-Container'>

      <a className="logo" href="/"><img src={로고후보} alt="비트코스로고" style={{ width:"10vw",height:"auto"}}/></a>

      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom>
            회원가입
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="비밀번호 확인"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError('');
            }}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="gender-label">성별</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={gender}
              label="성별"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="male">남성</MenuItem>
              <MenuItem value="female">여성</MenuItem>
              <MenuItem value="other">기타</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="birthDate"
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
              setBirthDateError('');
            }}
            error={Boolean(birthDateError)}
            helperText={birthDateError}
          />
          <FormControlLabel
            control={<Checkbox value="terms" color="primary" />}
            label="이용약관에 동의합니다."
          />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#03a9f4' }}
          onClick={handleSignUp}
          disabled={Boolean(
            emailError ||
            passwordError ||
            confirmPasswordError ||
            birthDateError
          )}
        >
            회원가입
          </Button>
        </Paper>
      </Container>
    </div>
  );
};
export default SignUp;
