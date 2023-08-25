import * as yup from 'yup';

const validations = yup.object().shape({
        email: yup.string().email('Gecerli bir email girin').required(),    
        password: yup.string().min(5).required(),
        passwordConfirm: yup.string().oneOf([yup.ref('password')]).required(),
  });

  export default validations;