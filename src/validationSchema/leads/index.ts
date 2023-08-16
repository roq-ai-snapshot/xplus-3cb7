import * as yup from 'yup';

export const leadValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  campaign_id: yup.string().nullable(),
});
