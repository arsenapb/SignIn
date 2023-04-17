export const CHANGE_PROFILE_PICTURE = 'CHANGE_PROFILE_PICTURE';
export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_WEBSITE = 'CHANGE_WEBSITE';

export function setProfilePicture(photo) {
    return {
        type: CHANGE_PROFILE_PICTURE,
        payload: photo,
    }
};

export function setFirstName(name) {
    return {
        type: CHANGE_FIRST_NAME,
        payload: name,
    }
};

export function setEmail(email) {
    return {
        type: CHANGE_EMAIL,
        payload: email,
    }
};

export function setPassword(password) {
    return {
        type: CHANGE_PASSWORD,
        payload: password,
    }
};

export function setWebsite(website) {
    return {
        type: CHANGE_WEBSITE,
        payload: website,
    }
};