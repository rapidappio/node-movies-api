const express = require('express');
const router = express.Router();
const { Movie } = require('../models');

// Create a new movie
router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a movie
router.put('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (movie) {
            await movie.update(req.body);
            res.json(movie);
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (movie) {
            await movie.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
