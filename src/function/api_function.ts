import axios from "axios";

const api = import.meta.env.VITE_API
const webtoken = import.meta.env.VITE_websiteToken
export const apipost = async (email: any,password: any,url:string,jwt:string) => {
    
    const body = {
        email : email,
        password : password
    }
    console.log(api + url)
    console.log(webtoken)
    const Response = await axios.post(api + url, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + webtoken + jwt,
        }
      })

    return Response

}