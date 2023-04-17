import { FormikState, getIn } from 'formik';

function hasError<T>(formik: FormikState<T>, fieldName: string) {
  return getIn(formik.errors, fieldName) && getIn(formik.touched, fieldName);
}

export { hasError };
