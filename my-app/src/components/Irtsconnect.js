import React, {Component, useState, useEffect} from 'react';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import {db} from '../firebase'
import firestore from '../firebase'


class Irtsconnect extends React.Component {
    state = {
        contacts: null,
        zoneList : null
    }
    
    componentDidMount(){
        console.log('mounted!!')
        db.collection('Contacts')
          .get()
          .then( snapshot => {
            const contacts = []
            snapshot.forEach( doc => {
                const data = doc.data()
                contacts.push(data)
            })
            this.setState({ contacts: contacts})
            console.log(contacts)
          })
          .catch( error => console.log(error));
          
            
    }

    // getZones = () =>  {
        
    //     //return zoneList
    // }

    addNewContact = () => {
        db.collection('Contacts')
          .add({
             zone: 'WR',
             division: 'BRC',
             department: 'Operating',
             designation: 'DOM',
             contact: 9724091901
          })
    }

    render() {
        return(
            <div className="Irtsconnect">
                <h1>IRTS Connect Web App</h1>
                <button onClick={this.addNewContact}>Add New Contact</button>
                {   
                    this.state.contacts &&
                    this.state.contacts.map( contact => {
                                           
                         
                        return(
                            <div>
                               <p>{contact.zone}</p> 
                            </div>
                        )
                    
                    })

                }
            </div>         
        )
    }

}

export default Irtsconnect