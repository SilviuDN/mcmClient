import axios from 'axios'

class UploadsService {

    constructor() {
        this.app = axios.create({
            // baseURL: process.env.REACT_APP_API_URL + '/upload',
            baseURL: 'http://matecumatei.herokuapp.com/api/upload',
            // baseURL: 'http://localhost:5000/api/',
            withCredentials: true
        })
    }

    uploadImage = imageFromForm => this.app.post('/image', imageFromForm)
}

export default UploadsService