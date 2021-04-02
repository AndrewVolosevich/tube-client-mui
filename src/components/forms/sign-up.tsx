import React from 'react';
import {Button, TextField, Grid, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons';
import {useFormik} from "formik";
import {AuthFields} from "../../interfaces/utility-types";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "500px",
    alignItems: "center"
  },
  avatar: {
    margin: "15px auto",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    paddingBottom: theme.spacing(10)
  },
  button: {
    marginTop: theme.spacing(4)
  }
}))

const SignUp = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate: (values) => {
      const errors: AuthFields = {}
      if (!values.name) {
        errors.name = "Поле обязательно для заполнения";
      } else if (values?.name.length < 3) {
        errors.name = "Длина имени должна быть не менее 3 символов";
      } else if (!values?.email) {
        errors.email = 'Поле обязательно для заполнения';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Проверьте вводимую почту';
      } else if (!values?.password) {
        errors.password = "Поле обязательно для заполнения";
      } else if (values?.password.length < 6) {
        errors.password = "Длина пароля должна быть не менее 6 символов";
      } else if (!(values.confirmPassword === values.password)) {
        errors.confirmPassword = "Пароли должны совпадать";
      }

      return errors
    },
    onSubmit: (e: any) => {
      e.preventDefault()
    }

  })
  return (
    <>
      <Grid container justify={"center"} className={classes.container}>
        <Grid item xs sm={10} md={8} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form noValidate className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Имя"
              name="name"
              autoComplete="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              error={!!formik.errors.name}
              helperText={formik.errors.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ваш Email"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.errors.email}
              helperText={formik.errors.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Подтвердите пароль"
              type="password"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={!!formik.errors.confirmPassword}
              helperText={formik.errors.confirmPassword}
            />
            <Button
              className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;