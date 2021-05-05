import { useState, useEffect } from 'react';
import axios from 'axios';

import PhotoCard from '../components/Micro/PhotoCard';

function Gallery() {
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState({
        item: []
    });
    const [expand, setExpand] = useState(false);
    const [searchPhoto, setSearchPhoto] = useState("");

    const styleExpandedGallery = {
        overflow: 'visible'
    }

    const styleMiniGallery = {
        height: 430,
        overflow: 'hidden'
    }

    const getPhotos = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => {
                setLoading(false);
                setPhotos({
                    item: response.data
                });
            });
    }

    useEffect(() => {
        getPhotos();
    }, []);

    //handle search
    const onChangeSearch = (e) => {
        setSearchPhoto(e.target.value);
    }

    const filter = () => {
        const filteredPhoto = photos.item.filter(item => {
            return (
                item.title.toLowerCase().includes(searchPhoto)
            );
        });

        return (
            filteredPhoto.map(item => {
                return <PhotoCard photo={item} />
            })
        );
    }

    return (
        <div className="gallery-wrapper" style={{
            minHeight: "100vh",
            backgroundColor: '#e1f5f0',
            paddingTop: 100,
        }}>
            <div className="gallery-content" style={{
                width: "90%",
                margin: "0 auto"
            }}>
                <div className="gallery-top-content d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: 32, fontWeight: 'bold' }}>Gallery</span>
                    <div className="search-section">
                        <input placeholder="search photos" name="searchPhoto" value={searchPhoto} onChange={(e) => onChangeSearch(e)} />
                    </div>
                </div>
                <div className="expand-toggle-wrapper d-flex justify-content-center w-100 mb-4 mt-3">
                    <button type="button" onClick={() => {
                        setExpand(prev => !prev);
                    }}>{expand ? "Minimize Photos" : "Show All"}</button>
                </div>
                <div className="gallery-photos-content d-flex flex-wrap justify-content-around" style={expand ? styleExpandedGallery : (searchPhoto == "" ? styleMiniGallery : styleExpandedGallery)}>
                    {
                        loading ? "load..." :
                            ( searchPhoto == "" ?
                                photos.item.map(photo => {
                                return (
                                <PhotoCard photo={photo} />
                                    )
                                })
                                :
                                filter()
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery
