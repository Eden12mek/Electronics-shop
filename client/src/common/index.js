const serverDomain = "http://localhost:5050"

const EndPoint = {
    signUp : {
        url : `${serverDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${serverDomain}/api/signin`,
        method : "post"
    },

}

export default EndPoint