import { useState } from 'react';

import ModalDetailPhoto from './ModalDetailPhoto';

function PhotoCard(props) {
    const [showDetail, setShowDetail] = useState(false);
    const [clickedCard, setClickedCard] = useState(false);
    const [favorite, setFavorite] = useState(false);
    return (
        <>
            <div className="card-wrapper" style={{
                width: 300,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                margin: "10px 20px",
                padding: 10,
                cursor: 'pointer'
            }}
            >
                <img
                    src={props.photo.thumbnailUrl}
                    onClick={() => {
                        setShowDetail(true)
                        setClickedCard(true)
                    }}
                />
                <span style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 10, marginBottom: 10 }}>{props.photo.title}</span>
                <div className="action d-flex justify-content-end">
                    <button type="button" onClick={() => setFavorite(prev => !prev)}>{favorite ? "Favourite" : "Add To Favourite"}</button>
                </div>
            </div>
            <ModalDetailPhoto show={showDetail} onHide={setShowDetail} setClickedCard={setClickedCard} photoId={props.photo.id} />
        </>
    )
}

export default PhotoCard
