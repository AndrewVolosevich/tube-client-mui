import React from 'react';
import {useFormik} from "formik";
import {ContactFields} from "../../interfaces/utility-types";
import {Button, Grid, TextField, Typography, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
  },
  form: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    minHeight: '500px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  button: {
    marginTop: "auto",
  }
}))

const ContactForm = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      tel: '',
      message: ''
    },
    validate: (values) => {
      const errors: ContactFields = {}
      if (!values.name) {
        errors.name = "Поле обязательно для заполнения";
      } else if (values?.name.length < 3) {
        errors.name = "Длина имени должна быть не менее 3 символов";
      } else if (!values?.email) {
        errors.email = 'Поле обязательно для заполнения';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Проверьте вводимую почту';
      } else if (!values.tel) {
        errors.tel = 'Введите ваш номер телефона';
      } else if (!values.message) {
        errors.message = 'Введите ваше сообщение';
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
        <Grid item xs={12}>
          <form noValidate onSubmit={formik.handleSubmit} className={classes.form}>
            <Box>
              <Typography color={"primary"} variant={"h4"}>
                Напишите нам
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Ваше имя"
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
                id="tel"
                label="Ваш номер телефона"
                name="tel"
                autoComplete="tel"
                value={formik.values.tel}
                onChange={formik.handleChange}
                error={!!formik.errors.tel}
                helperText={formik.errors.tel}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                multiline
                rowsMax={4}
                fullWidth
                id="message"
                label="Текст сообщения"
                name="message"
                autoComplete="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={!!formik.errors.message}
                helperText={formik.errors.message}
              />
            </Box>

            <Button
              className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Отправить
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;