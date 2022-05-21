import axios from 'axios'
const instance=axios.create({
    baseURL:"https://narasimha-epam.herokuapp.com/"
})
export default instance;