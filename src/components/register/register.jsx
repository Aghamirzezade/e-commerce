import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations.js";
import {Link} from "react-router-dom";



const Register = () => {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      passwordConfirm:''
    },
    validationSchema,
    onSubmit: async (values, bag)=>{
      console.log(values);
    }
  })


  return (
    <div>
      <Flex align="centet" width="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} isInvalid={formik.touched.email && formik.errors.email} />
                <div className="form-errors">{formik.errors.email}</div>
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}  isInvalid={formik.touched.password && formik.errors.password}  />
                <div className="form-errors">{formik.errors.password}</div>
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input name="passwordConfirm" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordConfirm}  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}   />
                <div className="form-errors">{formik.errors.passwordConfirm}</div>
              </FormControl>
              <Button mt="4" width="full" type="submit">
                Sign Up
              </Button>

            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Register;
