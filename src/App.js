import "./index.css"
import Header from './components/header'
import Section from "./components/section"
import data from "./data"



export default function App(){

    let array =  data.map(function(item){

        return <Section
                key={item.id}
                {...item}
                />
      })

      







  return (
  <div className="container"> 
            <Header/>

            <div className="maincontainer">
              {array}

            </div>

    


  </div>
  )  
}








// title={item.title}
//                 location={item.location}
//                 googleMapsUrl={item.googleMapsUrl}
//                 startDate={item.startDate}
//                 endDate={item.endDate}