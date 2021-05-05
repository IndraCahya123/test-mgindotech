import { useState, useEffect } from 'react';
import axios from 'axios';

import { Modal } from 'react-bootstrap';

function ModalDetailPhoto(props) {
    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState({
        item: {}
    });

    const getPhoto = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/photos/${props.photoId}`)
            .then(response => {
                setLoading(false);
                setPhoto({
                    item: response.data
                });
            });
    }

    useEffect(() => {
        getPhoto();
    }, []);

    return (
        <div>
            {loading ? "load..." : <Modal
                show={props.show}
                onHide={() => {
                    props.onHide(false)
                    props.setClickedCard(false)
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Detail Photo 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={photo.item.thumbnailUrl}
                        alt="Detail Photo Thumbnail"
                    />
                    <span>{ photo.item.title }</span>
                </Modal.Body>
            </Modal>}
        </div>
    )
}

export default ModalDetailPhoto
