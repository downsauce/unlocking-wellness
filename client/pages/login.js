/* eslint-disable react/jsx-filename-extension */
// export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  // const router = useRouter();
  // const { signInWithEmailAndPassword } = useUser();
  // console.log(signInWithEmailAndPassword)
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setError(null);
  //   signInWithEmailAndPassword(email, password)
  //     // .then((authUser) => {
  //     //   router.push('/dashboard')
  //     // })
  //     // .catch((err) => {
  //     //   setError(err.message)
  //     // })
  // }
//   return (
//     <div>
//       <form className={css.main} onSubmit={onSubmit}>
//         this is login
//         <input type='text' placeholder='email'
//         onChange={e => setEmail(e.target.value)}/>
//         <input type='text' placeholder='password'
//         onChange={e => setPassword(e.target.value)}/>
//         <input type='submit' value='Log In' />
//       </form>
//     </div>
//   );
// }

// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
// import css from '../styles/login.module.css';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useUser();
  console.log(signInWithEmailAndPassword)
  const onSubmit = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(email, password)
      // .then((authUser) => {
      //   router.push('/dashboard')
      // })
      // .catch((err) => {
      //   setError(err.message)
      // })
  }
  const routeToRegi = () => {
    router.push('/registration')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={() => routeToRegi()} href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}