import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EditPage.scss';
EditPage.propTypes = {

};

function EditPage(props) {
    const dispath = useDispatch();
    const history = useHistory()
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));

    const initialValues = isAddMode ? {
        title: '',
        categoryId: null,
        photo: '',
    } : editedPhoto;
    const handleSubmit = (values) => {
        if (isAddMode) {
            const action = addPhoto(values);
            console.log({ action });
            dispath(action);
        }
        else{
            const action = updatePhoto(values);
            dispath(action);
        }

        history.push('/photos')
    }
    return (
        <div className='photo-edit'>
            <Banner title="Pick your amazing photos 🎉 "></Banner>
            <div className="photo-edit__form">
                <PhotoForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    isAddMode = {isAddMode}
                ></PhotoForm>
            </div>
        </div>
    );
}

export default EditPage;