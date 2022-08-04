import * as yup from 'yup';

// 後々削除します
export const testSchema = yup
  .object({
    email: yup.string().required('必須項目です'),
    name: yup.string(),
  })
  .required();
