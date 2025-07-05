export async function fetchImage(name) {
    try {
        const response = await fetch('https://api.scryfall.com/cards/named?fuzzy=' + name);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const imageUrl = data.image_uris.normal;

        return imageUrl;
    } catch (error) {
        console.error('There was an error fetching the image:', error);
        throw error;
    }

}
