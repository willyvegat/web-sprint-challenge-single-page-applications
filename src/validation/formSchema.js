import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large", "extra-large"], "Size is required!"),
    sauce: yup
        .string()
        .oneOf(["garlic-ranch", "original-red", "barbecue-sauce", "spinach-alfredo"], "Sauce is required!"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    tomatoes: yup.boolean(),  
    olives: yup.boolean(),
    pineapple: yup.boolean(),
    onions: yup.boolean(),  
    spinach: yup.boolean(),  
    special: yup.string()  
})

export default formSchema;