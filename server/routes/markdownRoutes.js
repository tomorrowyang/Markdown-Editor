const express = require('express');
const router = express.Router();
const { getAllFiles, getFileById, createFile, updateFile, deleteFile, getAllFolders, createFolder, deleteFolder, moveFile, moveFolder, renameFile, renameFolder } = require('../controllers/markdownController');

router.get('/', getAllFiles);
router.get('/files/:id', getFileById);
router.post('/', createFile);
router.put('/:id', updateFile);
router.delete('/:id', deleteFile);
router.put('/files/move/:id', moveFile);
router.put('/files/rename/:id', renameFile);

router.get('/folders', getAllFolders);
router.post('/folders', createFolder);
router.delete('/folders/:id', deleteFolder);
router.put('/folders/move/:id', moveFolder);
router.put('/folders/rename/:id', renameFolder);

module.exports = router;