import React,{useState} from 'react'
import Navbar from "../Components/Navbar"
import "./css/DownloadPage.css"

export default function DownloadPage() {

    const [data,setData] = useState("")

    const downloadVideo = () =>{
        if(data==""){
            alert("Please Enter a Valid URL")
        }
        else{
  
        }
    }
    return (
        <>
        <Navbar/>
        <div>
            <h1 style={{textAlign:"center"}}>Welcome To Video Downloader</h1>
            <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
            <input autoFocus className="url_field" type="text" value={data} onChange={(text)=>setData(text.target.value)} placeholder="Enter Video URL"/>
          
            </div>

            <div style={{display:"flex",justifyContent:"center",marginTop:30}}>
            <button onClick={downloadVideo} className="btn btn-primary">Download Video</button>
            </div>
        </div>
        </>
    )
}
