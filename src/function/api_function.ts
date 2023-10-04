import axios from "axios";

const api = process.env.VITE_API
const webtoken = process.env.VITE_websiteToken
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