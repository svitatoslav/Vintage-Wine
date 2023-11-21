export async function sendGetRequest(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        return await response.json();

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}