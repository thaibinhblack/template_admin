// axios
import axios from 'axios'

const domain = "http://127.0.0.1:8000"

export default axios.create({
  domain
  // You can add your headers here
})
