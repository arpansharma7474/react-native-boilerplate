import strings from "./strings";

interface ValidationType {
    code: number,
    validationObject?: ValidationLoginType | ValidationForgotPasswordType
}

export interface ValidationLoginType {
    email: string,
    password: string
}
export interface ValidationForgotPasswordType {
    email: string
}

export interface ValidationEditProfileType {
    first_name: string,
    last_name: string,
    old_password: string,
    new_password: string,
    confirm_new_password: string,
    email: string,
    phone: string
}

export const validateLogin = (
    email: string,
    password: string
): Promise<ValidationType> => {
    const obj: ValidationLoginType = {};
    return new Promise((resolve, reject) => {
        if (!email)
            obj.email = strings.error_empty_email;
        else if (!obj.email && !strings.regex_email.test(email.trim()))
            obj.email = Error.error.error_invalid_email;
        if (!password)
            obj.password = Error.error.error_empty_password;
        else if (!obj.password && password.startsWith(' '))
            obj.password = Error.error.error_password_startspace;
        else if (!obj.password && password.endsWith(' '))
            obj.password = Error.error.error_password_endspace;
        else if (!obj.password && password && password.length < 6)
            obj.password = Error.error.error_password_short_length;
        else if (!obj.password && password.length > 20)
            obj.password = Error.error.error_password_too_long;
        if (Object.keys(obj).length != 0) {
            resolve({
                code: 400,
                validationObject: obj
            });
        } else {
            resolve({
                code: 200
            });
        }
    });
};

/** Validate Forgotpassword */

export const validateForgotPassword = (
    email: string
): Promise<ValidationType> => {
    const obj: ValidationForgotPasswordType = {};
    return new Promise((resolve, reject) => {
        if (!email)
            obj.email = Error.error.error_empty_email;
        else if (!obj.email && !Error.regex.regExEmail.test(email.trim()))
            obj.email = Error.error.error_invalid_email;

        if (Object.keys(obj).length != 0) {
            resolve({
                code: 400,
                validationObject: obj
            });
        } else {
            resolve({
                code: 200
            });
        }
    });
};
/** Validate EditProfile */
export const validateEditProfile = (
    userDetails: FormTypes
): Promise<ValidationType> => {
    const obj: ValidationEditProfileType = {};
    return new Promise((resolve, reject) => {
        if (!userDetails.email)
            obj.email = Error.error.error_empty_email;
        else if (!obj.email && !Error.regex.regExEmail.test(userDetails.email.trim()))
            obj.email = Error.error.error_invalid_email;

        if (!userDetails.first_name) {
            obj.first_name = Error.error.error_empty_first_name;
        } else if (
            !obj.first_name &&
            Error.regex.numericRegEx.test(userDetails.first_name)
        ) {
            obj.first_name = Error.error.error_first_name_numeric;
        } else if (
            !obj.first_name &&
            Error.regex.specialCharRegEx.test(userDetails.first_name)
        ) {
            obj.first_name = Error.error.error_first_name_specialChar;
        } else if (!obj.first_name && userDetails.first_name.length >= 100) {
            obj.first_name = Error.error.error_first_name_long;
        }

        if (!userDetails.last_name) {
            obj.last_name = Error.error.error_empty_last_name;
        } else if (
            !obj.last_name &&
            Error.regex.numericRegEx.test(userDetails.last_name)
        ) {
            obj.last_name = Error.error.error_last_name_numeric;
        } else if (
            !obj.last_name &&
            Error.regex.specialCharRegEx.test(userDetails.last_name)
        ) {
            obj.last_name = Error.error.error_last_name_specialChar;
        } else if (!obj.last_name && userDetails.last_name.length >= 100) {
            obj.last_name = Error.error.error_last_name_long;
        }
        if (!userDetails.phone) {
            obj.phone = Error.error.error_empty_phone_number;
        } else if (!obj.phone && userDetails.phone.includes(' '))
            obj.phone = Error.error.error_spaceInPhone;
        else if (!obj.phone && userDetails.phone.includes('.'))
            obj.phone = Error.error.error_numeric_phoneno;
        else if (!obj.phone && userDetails.phone.includes(',')) {
            obj.phone = Error.error.error_numeric_phoneno;
        } else if (!obj.phone && userDetails.phone.length < 10) {
            obj.phone = Error.error.error_phone_length;
        }
        if (!userDetails.new_password && (userDetails.old_password || userDetails.confirm_new_password))
            obj.new_password = Error.error.error_empty_newPass;
        else if (!obj.new_password && userDetails.new_password.startsWith(' '))
            obj.new_password = Error.error.error_password_startspace;
        else if (!obj.new_password && userDetails.new_password.endsWith(' '))
            obj.new_password = Error.error.error_password_endspace;
        else if (!obj.new_password && userDetails.new_password && userDetails.new_password.length < 6)
            obj.new_password = Error.error.error_password_short_length;
        else if (!obj.new_password && userDetails.new_password.length > 20)
            obj.new_password = Error.error.error_password_too_long;

        if (!userDetails.old_password && (userDetails.new_password || userDetails.confirm_new_password))
            obj.old_password = Error.error.error_empty_oldPass;
        else if (!obj.old_password && userDetails.old_password.startsWith(' '))
            obj.old_password = Error.error.error_password_startspace;
        else if (!obj.old_password && userDetails.old_password.endsWith(' '))
            obj.old_password = Error.error.error_password_endspace;
        else if (!obj.old_password && userDetails.old_password && userDetails.old_password.length < 6)
            obj.old_password = Error.error.error_password_short_length;
        else if (!obj.old_password && userDetails.old_password.length > 20)
            obj.old_password = Error.error.error_password_too_long;

        if (!userDetails.confirm_new_password && (userDetails.old_password || userDetails.confirm_new_password))
            obj.confirm_new_password = Error.error.error_empty_confirmPass;
        else if (!obj.confirm_new_password && userDetails.confirm_new_password.startsWith(' '))
            obj.confirm_new_password = Error.error.error_password_startspace;
        else if (!obj.confirm_new_password && userDetails.confirm_new_password.endsWith(' '))
            obj.confirm_new_password = Error.error.error_password_endspace;
        else if (!obj.confirm_new_password && userDetails.confirm_new_password && userDetails.confirm_new_password.length < 6)
            obj.confirm_new_password = Error.error.error_password_short_length;
        else if (!obj.confirm_new_password && userDetails.confirm_new_password.length > 20)
            obj.confirm_new_password = Error.error.error_password_too_long;
        else if (userDetails.confirm_new_password !== userDetails.new_password)
            obj.confirm_new_password = Error.error.error_password_not_match

        if (Object.keys(obj).length != 0) {
            resolve({
                code: 400,
                validationObject: obj
            });
        } else {
            resolve({
                code: 200
            });
        }
    });

};
