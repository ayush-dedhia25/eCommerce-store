import * as yup from 'yup';

const matchUrl = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
const matchDateFormat = new RegExp(/\d{2}\/\d{2}/);
const matchUnits = new RegExp(/^\d{1,2}((g|gm|GM)|(kg|KG)|(l|L)|(ml|ML))$/);

export const validationSchema = yup.object().shape({
   productName: yup.string().required('Please specify the product name!'),
   productWeight: yup.string().matches(matchUnits, 'Invalid unit type!').required('Please specify the product weight!'),
   productBrand: yup.string().required('Please specify the product brand!'),
   productPrice: yup.string().required('Please specify the product price!'),
   productMgfDate: yup.string().matches(matchDateFormat, 'Format is invalid!').required('Please specify the product manufacturing date!'),
   productExpDate: yup.string().matches(matchDateFormat, 'Format is invalid!').required('Please specify the product expiry date!'),
   productInStock: yup.string().required('Please specify the product inStock quantity!'),
   productType: yup.string().required('Please specify the product type!'),
   productImgUrl: yup.string().matches(matchUrl, 'Url is invalid!').required('Please specify the product image url!')
});