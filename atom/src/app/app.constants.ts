export const AppConstants = {
    PRODUCT_NAME: 'Atom',
    AUTH_DATA: {
        HEADERS: {
            APP_JSON_CONTENT_TYPE: 'application/json',
            CORS: '*'
        }
    },
    API_ENDPOINTS: {
        // GET_BOOKS: "/books/v1/"
        GET_BOOKS: "/books/v1/volumes?q=kaplan%20test%20prep"
    },
    STATUS_CODE: {
        SUCCESS: 200,
        CREATED: 201,
        MAX_SUCCESS_CODE: 206,
        APZ_CODE: {
            PSWD_EXP: 'APZ_EXP_003'
        }
    },
    HTTP_MESSAGE_TYPE: {
        WARN: 'WARN',
        ERROR: 'ERROR',
        CONFIRM: 'CONFIRM',
        INFO: 'INFO',
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL'
    },
    ALERT_TYPE: {
        SUCCESS: 'success',
        ERROR: 'error',
        WARN: 'warning',
        INFO: 'info',
        DANGER: 'danger',
        PRIMARY: 'primary'
    },
    LANGUAGES: {
        en: 'english'
    }
};


