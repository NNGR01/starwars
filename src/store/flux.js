import { useState } from 'react';


const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
        characters: "null",
        planets: "null",
       vehicles: "null",
        planet: "null",
        character: "null",
        vehicle: "null",
        

    },

        actions: {
            getPlanets:  async   ()  =>{
               const resp = await   fetch("https://www.swapi.tech/api/planets");
               const data = await   resp.json();
               setStore({ planets : data });
            },
            getPlan: async id  =>{
                fetch(`https://www.swapi.tech/api/planets${id}`)
                .then ( resp => resp.json())
                .then ( data =>{
                    setStore({ planets : data })
                })
            },
            getVehicles:  async   ()  =>{
                const resp = await   fetch("https://www.swapi.tech/api/vehicles");
                const data = await   resp.json();
                setStore({ vehicles : data });
             },
    
        getVeh: async id =>{
            fetch(`https://www.swapi.tech/api/vehicles${id}`)
            .then (resp => resp.json())
            .then( data =>{
                setStore( { vehicle : data } )
            })
        },
        getCharacters:  async   ()  =>{
            const resp = await   fetch("https://www.swapi.tech/api/people");
            const data = await   resp.json();
            setStore({ characters : data });
         },
         getChar: async id  =>{
             fetch(`https://www.swapi.tech/api/people${id}`)
             .then ( resp => resp.json())
             .then ( data =>{
                 setStore({ character : data })
             })
         },
      
        }


    }
}
export default getState;