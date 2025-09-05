import { useState } from 'react';
import '../styles/EditSuperheroForm.css';

function EditSuperheroForm({ superhero, onClose, onSave }) {
    const [formData, setFormData] = useState({ ...superhero });
    const [newImages, setNewImages] = useState(['']);
    const [removeImageIds, setRemoveImageIds] = useState([]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleNewImageChange(index, value) {
        const updated = [...newImages];
        updated[index] = value;
        setNewImages(updated);
    }

    function addNewImageField() {
        setNewImages((prev) => [...prev, '']);
    }

    function removeExistingImage(id) {
        setRemoveImageIds((prev) => [...prev, id]);

        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((img) => img.id !== id),
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave({
            ...formData,
            newImages: newImages.filter((url) => url.trim() !== ''),
            removeImageIds,
        });
        onClose();
    }

    return (
        <div className="edit-form-overlay">
            <div className="edit-form-container">
                <h2>Edit Superhero</h2>
                <form onSubmit={handleSubmit} className="edit-form">
                    <label>
                        Nickname:
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Real Name:
                        <input
                            type="text"
                            name="real_name"
                            value={formData.real_name}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Origin Description:
                        <textarea
                            name="origin_description"
                            value={formData.origin_description}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Superpowers:
                        <textarea
                            name="superpowers"
                            value={formData.superpowers}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Catch Phrase:
                        <input
                            type="text"
                            name="catch_phrase"
                            value={formData.catch_phrase}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="existing-images">
                        <label>Existing Images:</label>
                        {formData.images.map((img) => (
                            <div key={img.id} className="image-row">
                                <input
                                    type="text"
                                    value={img.url}
                                    readOnly
                                    className="image-url-input"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeExistingImage(img.id)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="new-images">
                        <label>New Images:</label>
                        {newImages.map((url, index) => (
                            <input
                                key={index}
                                type="text"
                                value={url}
                                onChange={(e) =>
                                    handleNewImageChange(index, e.target.value)
                                }
                                placeholder="Image URL"
                            />
                        ))}
                        <button type="button" onClick={addNewImageField}>
                            + Add another image
                        </button>
                    </div>

                    <div className="edit-form-buttons">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditSuperheroForm;
