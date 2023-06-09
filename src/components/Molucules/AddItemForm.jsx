import Box from "@mui/material/Box";
import axios from "../../axios";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
// import OutlinedInput from "@mui/material/OutlinedInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
export default function AddItemForm({ onSubmitHandler, type }) {
  // const validationSchema = yup.object({
  //   title: yup
  //     .string("enter your data")
  //     .title("title is required")
  //     .required("required"),
  //   category: yup
  //     .string("enter your data")
  //     .category("enter a valid category")
  //     .required("required"),
  //   description: yup
  //     .string("enter your data")
  //     .description(" valid description is required")
  //     .required("required"),
  //   imgUrl: yup
  //     .string("enter your data")
  //     .imgUrl("please enter a valid url")
  //     .required("required"),

  //   price: yup
  //     .number("enter your data")
  //     .price("please a valid price")
  //     .max(6, "must not be more than 6 digits")
  //     .required(".required"),
  // });

  const formik = useFormik({
    initialValues: {
      price: "12",
      title: "Paratha",
      category: "fOOD",
      description: "Classic indian cuisine dish",
      imgUrl:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      const res = await axios.post("/products", values);
      onSubmitHandler(res);
    },
  });

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        p: 6,
      }}
    >
      <Typography variant="h5">Add Item form</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <TextField
            id="outlined-basic"
            name="title"
            label="Title"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            id="outlined-basic"
            name="category"
            label="Category"
            variant="outlined"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
          />
          <TextField
            id="outlined-multiline-flexible"
            multiline
            name="description"
            label="Description"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            id="outlined-start-adornment"
            name="price"
            label="Price"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            id="outlined-basic"
            name="imgUrl"
            label="Image Url"
            variant="outlined"
            value={formik.values.imgUrl}
            onChange={formik.handleChange}
            error={formik.touched.imgUrl && Boolean(formik.errors.imgUrl)}
            helperText={formik.touched.imgUrl && formik.errors.imgUrl}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
