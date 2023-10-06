import axios from "axios";

const api = import.meta.env.VITE_API
const webtoken = import.meta.env.VITE_websiteToken
export const apipost = async (body:any,url:string,jwt:string) => {
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

export const apiput = async (body:any,url:string,jwt:string) => {
    

  console.log(api + url)
  console.log(webtoken)
  const Response = await axios.put(api + url, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + webtoken + jwt,
      }
    })

  return Response

}

export const apiget = async (url:string,jwt:string) => {
    

  console.log(api + url)
  console.log(webtoken)
  const Response = await axios.put(api + url, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + webtoken + jwt,
      }
    })

  return Response

}

export const apidelete = async (url:string,jwt:string) => {
    

  console.log(api + url)
  console.log(webtoken)
  const Response = await axios.put(api + url, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + webtoken + jwt,
      }
    })

  return Response

}