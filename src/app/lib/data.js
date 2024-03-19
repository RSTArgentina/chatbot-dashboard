const apiUrl = 'https://api-danielbot.onrender.com/clients';


export const fetchClients = async () => {
    try {
        const clients = await fetch(apiUrl);
        const data = await clients.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;


    }
}