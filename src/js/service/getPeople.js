const URI_PEOPLE = "https://www.swapi.tech/api/people"

export const getPeople = async () => {
    try{
        const response= await fetch(URI_PEOPLE);
        if(!response.ok){
            throw new Error("Esto es un error")
        }
        const actualData = await response.json();
        return actualData;
    }
    catch(err){
        console.log(err.message);
    }
}