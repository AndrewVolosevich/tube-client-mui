import React from 'react';
import {Button, TextField, MenuItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useFormik} from "formik";
import {OrderFields} from "../../interfaces/utility-types";
import {getDiametrOptions} from "../../mocky/get-diametr-options";
import {getLabelOptions} from "../../mocky/get-label-options";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "500px",
    alignItems: "center"
  },
  form: {
    paddingBottom: theme.spacing(10),
  },
  button: {
    marginTop: theme.spacing(4)
  }
}))

const diametrOptions = getDiametrOptions()
const labelOptions = getLabelOptions()

const OrderForm = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      height: '',
      diameter: '',
      label: '',
      count: '',
      name: '',
      email: '',
      tel: '',
    },
    validate: (values) => {
      const errors: OrderFields = {}
      if (!values.height) {
        errors.height = 'Введите пожалуйста высоту';
      } else if (!values.diameter) {
        errors.diameter = 'Введите пожалуйста диаметр';
      } else if (!values.label) {
        errors.label = 'Выберите вариант этикетки';
      } else if (!values.count) {
        errors.count = 'Введите количество';
      } else if (!values.name) {
        errors.name = "Поле обязательно для заполнения";
      } else if (values?.name.length < 3) {
        errors.name = "Длина имени должна быть не менее 3 символов";
      } else if (!values?.email) {
        errors.email = 'Поле обязательно для заполнения';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Проверьте вводимую почту';
      }

      return errors
    },
    onSubmit: (e: any) => {
      e.preventDefault()
    }

  })
  return (
    <>
      <form noValidate className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          margin="normal"
          type={"number"}
          required
          fullWidth
          id="height"
          label="Высота, мм"
          name="height"
          autoComplete="height"
          autoFocus
          value={formik.values.height}
          onChange={formik.handleChange}
          error={!!formik.errors.height}
          helperText={formik.errors.height}
        />
        <TextField
          variant="standard"
          select
          type={"number"}
          margin="normal"
          required
          fullWidth
          name="diameter"
          label="Диаметр, мм"
          id="diameter"
          autoComplete="diameter"
          value={formik.values.diameter}
          onChange={formik.handleChange}
          error={!!formik.errors.diameter}
          helperText={formik.errors.diameter}
        >
          {diametrOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="standard"
          select
          type={"number"}
          margin="normal"
          required
          fullWidth
          name="label"
          label="Тип этикетки"
          id="label"
          autoComplete="label"
          value={formik.values.label}
          onChange={formik.handleChange}
          error={!!formik.errors.label}
          helperText={formik.errors.label}
        >
          {labelOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="standard"
          margin="normal"
          type={"number"}
          required
          fullWidth
          id="count"
          label="Колличество"
          name="count"
          autoComplete="count"
          value={formik.values.count}
          onChange={formik.handleChange}
          error={!!formik.errors.count}
          helperText={formik.errors.count}
        />
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Имя"
          name="name"
          autoComplete="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
        />
        <TextField
          variant="standard"
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
          variant="standard"
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
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="secondary"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Отправить
        </Button>
      </form>
    </>
  );
};

export default OrderForm;