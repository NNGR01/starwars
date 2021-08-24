import { useState } from 'react';


const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
        characters: "null",
        planets: "null",
        starships: "null",
        planet: "null",
        character: "null",
        starship: "null",},

        actions: {
            getPlanets:  async   ()  =>{
               const resp = await   fetch("https://www.swapi.tech/api/planets");
               const data = await   resp.json();
               setStore({ planet : data });
            },
            getPlanet: async id  =>{
                fetch(`https://www.swapi.tech/api/planets${id}`)
                .then ( resp => resp.json())
                .then ( data =>{
                    setStore({ planets : data })
                })
            }
        }


    }
}
export default getState;