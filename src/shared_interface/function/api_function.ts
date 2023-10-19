import axios from "axios";

const api = import.meta.env.VITE_API
const api2 = import.meta.env.VITE_PROXY_API
const webtoken = import.meta.env.VITE_websiteToken
export const apipost = async (body:any,url:string,jwt:string) => {
    console.log(api2+url)
    const Response = await axios.post(api + url, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + webtoken + jwt,
        }
      })

    return Response

}

export const apiput = async (body:any,url:string,jwt:string) => {

  const Response = await axios.put(api + url, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + webtoken + jwt,
      }
    })

  return Response

}

export const apiget = async (url:string,jwt:string) => {

  const Response = await axios.get(api + url, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + webtoken + jwt,
      }
    })

  return Response

}
// JSON.stringify(body)
export const apidelete = async (url:string,jwt:string) => {

  const Response = await axios.delete(api + url, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": 'Bearer ' + webtoken + jwt,
    }
  })

return Response


}