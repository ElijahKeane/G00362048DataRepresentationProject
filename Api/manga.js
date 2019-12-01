// routes/api/manga.js

const express = require('express');
const router = express.Router();

// Loads the model for manga
const Manga = require('../../models/Manga');

//tests route
router.get('/test', (req, res) => res.send('manga route testing!'));

//gets all the mangas
router.get('/', (req, res) => {
  Manga.find()
    .then(mangas => res.json(mangas))
    .catch(err => res.status(404).json({ nomangasfound: 'No Mangas found' }));
});

//gets a single manga by id
router.get('/:id', (req, res) => {
  Manga.findById(req.params.id)
    .then(manga => res.json(manga))
    .catch(err => res.status(404).json({ nomangafound: 'No Manga found' }));
});

//adds/saves manga
router.post('/', (req, res) => {
  Manga.create(req.body)
    .then(manga => res.json({ msg: 'Manga added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this manga' }));
});

//Updates manga
router.put('/:id', (req, res) => {
  Manga.findByIdAndUpdate(req.params.id, req.body)
    .then(manga => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

//delets manga using the id
router.delete('/:id', (req, res) => {
  Manga.findByIdAndRemove(req.params.id, req.body)
    .then(manga => res.json({ mgs: 'Manga entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a manga' }));
});

module.exports = router;