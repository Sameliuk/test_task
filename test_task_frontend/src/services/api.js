const BASE_URL = 'http://localhost:3000/';

export const getAllSuperheroes = async (page = 1) => {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch superheroes');
    return response.json();
};

export const getSingleSuperhero = async (id) => {
    const response = await fetch(`${BASE_URL}superheroes/${id}`);
    if (!response.ok) throw new Error('Failed to fetch superhero');
    return response.json();
};

export const createSuperhero = async (heroData) => {
    const response = await fetch(`${BASE_URL}superheroes/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(heroData),
    });
    if (!response.ok) throw new Error('Failed to create superhero');
    return response.json();
};

export const updateSuperhero = async (id, heroData) => {
    const response = await fetch(`${BASE_URL}superheroes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(heroData),
    });
    if (!response.ok) throw new Error('Failed to update superhero');
    return response.json();
};

export const deleteSuperhero = async (id) => {
    const response = await fetch(`${BASE_URL}superheroes/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete superhero');
    return response.json();
};
