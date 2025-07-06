import { useState, useEffect } from 'react'
import { fetchImage } from "../utils/fetchImage"

export function Card({ id, name, clicked, handleClick }) {
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getImage() {
            try {
                const url = await fetchImage(name);
                setImageUrl(url);
            } catch (err){
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        getImage();
    }, [name]);

    return (
        <>
            <div className="card" onClick={() => handleClick(id)}>
                {loading ? <p>Loading...</p> : null}
                {error !== null ? <p>{error}</p> : null}
                <img src={imageUrl} alt={name} />
                <h1>{name}</h1>
            </div>
        </>
    )

}