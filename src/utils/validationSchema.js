import * as yup from "yup"

export const validationSchema = yup.object({
    name: yup
            .string("Enter shop's name")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
            .required("Shop name is required"),

    area: yup
            .string()
            .required("Area is required"),
    
    category: yup
                .string()
                .required("Category is required"),
    
    openDate: yup
                .date("Please enter a valid date")
                .required("Opening date is required"),

    closeDate: yup 
                .date("Please enter a valid date")
                .min(yup.ref('openDate'), "Closing date must be more than opening date")
                .required("Closing date is required")
})