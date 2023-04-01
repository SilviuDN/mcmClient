import axios from 'axios' 
 
 class SectionsService{

    constructor(){
        this.app = axios.create({
            // baseURL: process.env.REACT_APP_API_URL + '/sections'
            baseURL: 'http://matecumatei.herokuapp.com/api/sections'
            // baseURL: 'http://localhost:5000/api/',
        })
    }

    // getAllLectures = () => this.app.get('/')
    getSection = sectionId => this.app.get(`/${sectionId}`)
    saveSection = (section_info) => this.app.post('/new', section_info)
    editSection = (section_info) => this.app.put(`/edit/${section_info._id}`, section_info)
 }

 export default SectionsService