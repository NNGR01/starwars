

const getState = ({ getStore, getAction, setStore }) => {
  return {
    store: {
      characters: "null",
      character: "null",
      planets: "null",
      planet: "null",
      starships: "null",
      starship: "null",
    },

    actions: {
      getPlanets: async () => {
        const resp = await fetch("https://www.swapi.tech/api/planets");
        const data = await resp.json();
        setStore({ planets: data });
      },
      getPlan: async (id) => {
       const resp = await fetch(`https://www.swapi.tech/api/planets/${id}`);
       const data = await resp.json()
       setStore({ planet : data  });
      },
      getStarsh: async () => {
        const resp = await fetch("https://www.swapi.tech/api/starships");
        const data = await resp.json();
        setStore({ starships: data });
      },

      getStar: async (id) => {
        const resp = await fetch(`https://www.swapi.tech/api/starships/${id}`);
        const data = await resp.json()
        setStore({ starship: data });
        
      },
      getCharacters: async () => {
        const resp = await fetch("https://www.swapi.tech/api/people");
        const data = await resp.json();
        setStore({ characters: data });
      },
      getChar: async (id) => {
       const resp = await fetch(`https://www.swapi.tech/api/people/${id}`);
       const data = await resp.json()
       setStore({ character: data });
      },
    },
  };
};
export default getState;
