import axios from "axios";
const api = import.meta.env.VITE_API
const apptoken = import.meta.env.VITE_appToken
export const apipost = async (email: any,password: any,url:string,jwt:string) => {
    
    const body = {
        email : email,
        password : password
    }

    const Response = await axios.post(api + url +JSON.stringify(body),{
        headers: {
            "Authorization": 'Bearer ' + apptoken + jwt,
            'Content-Type': 'application/json',
            
          }
    })

    return Response

}