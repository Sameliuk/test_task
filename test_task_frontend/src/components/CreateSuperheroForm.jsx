import { useState } from 'react';
import '../styles/CreateSuperhero.css';

function CreateSuperheroForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
        images: [''],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (index, value) => {
        const newImages = [...formData.images];
        newImages[index] = value;
        setFormData({ ...formData, images: newImages });
    };

    const addImageField = () => {
        setFormData({ ...formData, images: [...formData.images, ''] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="create-form">
            <h2>Create Superhero</h2>

            <label>
                Nickname:
                <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="Nickname"
                    required
                />
            </label>

            <label>
                Real Name:
                <input
                    type="text"
                    name="real_name"
                    value={formData.real_name}
                    onChange={handleChange}
                    placeholder="Real Name"
                    required
                />
            </label>

            <label>
                Origin Description:
                <textarea
                    name="origin_description"
                    value={formData.origin_description}
                    onChange={handleChange}
                    placeholder="Origin Description"
                />
            </label>

            <label>
                Superpowers:
                <textarea
                    name="superpowers"
                    value={formData.superpowers}
                    onChange={handleChange}
                    placeholder="Superpowers"
                />
            </label>

            <label>
                Catch Phrase:
                <input
                    type="text"
                    name="catch_phrase"
                    value={formData.catch_phrase}
                    onChange={handleChange}
                    placeholder="Catch Phrase"
                />
            </label>

            <div className="images">
                <label>Images:</label>
                {formData.images.map((url, index) => (
                    <input
                        key={index}
                        type="text"
                        value={url}
                        onChange={(e) =>
                            handleImageChange(index, e.target.value)
                        }
                        placeholder="Image URL"
                    />
                ))}
                <button type="button" onClick={addImageField}>
                    + Add another image
                </button>
            </div>

            <button type="submit" className="submit-btn">
                Create
            </button>
        </form>
    );
}

export default CreateSuperheroForm;
