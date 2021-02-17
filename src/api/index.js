import axios from 'axios'

const post = (params) => {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password
    })
        .then(res => {
            // Установить в store
            // authToken: token
            dispatch(setAuthToken('sometokenhash'))
            // username & email
            dispatch(setUserData('USERNAME', 'user@email.com'))
            // isLoading: false
            dispatch(setIsFetching(false))
        })
        .catch(err => {
            console.log('OOPS!')
            console.log(err)
            console.log('WE GOT SOME ERROR')

            // dispatch EXAMPLE
            // dispatch(someAction(err.message))
        });
}