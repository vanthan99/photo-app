import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {

};

function MainPage(props) {
    const photos = useSelector((state) => state.photos)
    const dispatch = useDispatch();
    console.log("list photo: ", photos);
    const history = useHistory();
    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className='photo-main'>
            <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG}></Banner>
            <Container className="text-center">
                <Link to='/photos/add'>Add new photo</Link>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;