export default {
    regex: {
        regExEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        nameRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        numericRegEx: /\d/,
        specialCharRegEx: /[^a-zA-Z ]/,
    },
    error: {
        error_auth: "Your account is being used in another device.",
        error_block: "Your account has blocked.For more info, Please contact store-admin",
        error_internet_connection: 'Something went wrong!! Please check your internet and try again',
        error_empty_email: 'Please enter the email',
        error_invalid_email: 'Please enter a valid email address',
        error_empty_password: 'Please enter the password',
        error_password_short_length: 'The password cannot be less than 6 characters',
        error_password_too_long: 'The password cannot be more than 20 characters',
        error_password_startspace: 'Password cannot start with a space',
        error_password_endspace: 'Password cannot end with a space',
        error_empty_first_name: 'Please enter firstname',
        error_empty_last_name: 'Please enter lastname',
        error_first_name_numeric: 'Firstname cannot have numeric values',
        error_first_name_specialChar: 'First name cannot have special characters',
        error_first_name_long: 'First name field cannot have more than 100 char',
        error_last_name_numeric: 'Last name cannot have numeric values',
        error_last_name_specialChar: 'Last name cannot have special characters',
        error_last_name_long: 'Last name field cannot have more than 100 char',
        error_empty_confirmPass: 'Please confirm your Password',
        error_empty_newPass: 'Please enter a new Password',
        error_empty_oldPass: 'Please enter old Password',
        error_empty_phone_number: 'Please Enter Phone Number',
        error_spaceInPhone: 'Number cannot contain space',
        error_numeric_phoneno: 'Please enter numeric values for phone number',
        error_phone_length: 'The Phone Number cannot be less than 10 digits',
        error_empty_model: 'Please enter the model ',
        error_empty_license_plate: 'Please enter the license plate number',
        error_empty_color: 'Please enter the color',
        error_color_numeric: 'Color name cannot have numeric values',
        error_invalid_model_name: 'Please enter a valid model name ',
        error_invalid_license_plate_number: 'Please enter a valid license plate number',
        error_invalid_color_special_char: 'Color name cannot have  special characters',
        error_license_plate_length: 'The License Plate Number cannot be less than 10 digits',
        error_empty_reason: 'Please enter the reason for decline',
        error_reason_startspace: 'Reason cannot be start with a space',
        error_reason_endspace: 'Reason cannot be end with a space',
        error_license_plate_startspace: 'License Plate Number cannot start with a space',
        error_license_plate_endspace: 'License Plate Number cannot end with a space',
        error_model_name_startspace: 'Model name cannot start with a space',
        error_model_name_endspace: "Model name cannot end with a space",
        error_color_length: 'The Color name cannot be less than 3 digits',
        error_password_not_match: 'Your new password and confirm password do not match'

    },
}