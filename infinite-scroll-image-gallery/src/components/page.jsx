import { useEffect, useState } from "react";

function Page() {
    const [photoarray, setPhotoarray] = useState([]);
    const [imagesloaded, setImagesloaded] = useState(0);
    const [totalimages, setTotalimages] = useState(0);
    const [ready, setReady] = useState(false);
    const [count, setCount] = useState(5);

    async function getphotos() {
        const apikey = "     API KEY    ";
        const url = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setPhotoarray([...photoarray, ...data]);
        } catch (error) {
            console.log(error);
        }
    }

    function loadimages() {
        setImagesloaded(imagesloaded + 1);
        if (imagesloaded + 1 === totalimages) {
            setReady(true);
            setCount(6);
        }
    }

    useEffect(() => {
        getphotos();
    }, []);

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 && ready) {
                getphotos();
                setReady(false);
            }
        };

        window.addEventListener("scroll", handlescroll);

        return () => {
            window.removeEventListener("scroll", handlescroll);
        };
    }, [ready]);

    useEffect(() => {
        setTotalimages(photoarray.length);
    }, [photoarray]);

    return (
        <>
            <div>
                <h1 className="heading">Infinity Scroll - Unsplash API</h1>
                <div className="loader" style={{ display: ready ? "none" : "block" }}>
                    Loading ...
                </div>

                <div className="image-container">
                    {photoarray.map((data, index) => (
                        <a key={index} href={data.links.html} target="_blank" rel="noopener noreferrer">
                            <img
                                src={data.urls.regular}
                                alt={data.alt_description || "unknown"}
                                title={data.alt_description || "Unknown"}
                                onLoad={loadimages}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;
