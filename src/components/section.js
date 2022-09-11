import React from "react"

export default function Section(props){


    return   <div> 
    
    <div className="sectioncontainer">

                <div>
                    <img className="Displayimage" src={props.imageUrl}/>
                </div>

                <div className="details">

                    <div className="location">
                        <div className="text locationname"> <img className="locationicon" src={require('../components/Location.png')}/>{(props.location).toUpperCase()}</div>
                        <p className="text"> <a href={props.googleMapsUrl}> View on google maps</a> </p>
                    </div>

                   <p className="name">{props.title}</p>

                    <p className="text date">{props.startDate} - {props.endDate}</p>

                    <p className="text description">{props.description}</p>

                </div>

                


            </div>

            <hr/>

            </div>
}