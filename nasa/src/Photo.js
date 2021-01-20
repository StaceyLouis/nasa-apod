import  {React, useEffect, useState}  from 'react'
import axios from 'axios'
import './Photo.css'

function Photo() {
    const [data, setData] = useState([])
    const [date] = useState(new Date())
    const [newDate, setNewDate] = useState(null)
    let todaysDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    const handleChange = e =>{
        setNewDate(e.target.value)
    }
    useEffect(() =>{
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=qzjerPoBW6VLh87EEOhC9MyjRxvS3NzhABdb5uh2&date=${todaysDate}`)
            .then(res =>{
                console.log(res)
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [todaysDate])

    useEffect(() =>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=qzjerPoBW6VLh87EEOhC9MyjRxvS3NzhABdb5uh2&date=${newDate}`)
        .then(response =>{
            console.log(response)
            setData(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
}, [newDate])
    return (
        <div>
            <h2>Pick a date to display image</h2>
            <input type="date" id="start" name="trip-start"
       min="1995-06-16" max={todaysDate} onChange={handleChange} value={newDate} />
        <div className="photo">
           
            <img src={data.url} alt="Image Unavailable" id="main-photo"/>
            <h4>{data.date}</h4>
            <p>{data.title}</p>
          
        </div>
        </div>
    )
}


export default Photo