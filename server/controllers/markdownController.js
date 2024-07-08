const db = require('../db');

const getAllFiles = (req, res) => {
  db.query('SELECT * FROM files', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
};

const createFile = (req, res) => {
  const { name, content } = req.body;
  db.query('INSERT INTO files (name, content) VALUES (?, ?)', [name, content], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: results.insertId, name, content });
  });
};

const updateFile = (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;
  db.query('UPDATE files SET name = ?, content = ? WHERE id = ?', [name, content, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id, name, content });
  });
};

const deleteFile = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM files WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id });
  });
};

const getFileById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM files WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('File not found');
    }
    res.status(200).json(results[0]);
  });
};

const getAllFolders = (req, res) => {
  db.query('SELECT * FROM folders', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(results);
  });
};

const createFolder = (req, res) => {
  const { name, parent_id } = req.body;
  db.query('INSERT INTO folders (name, parent_id) VALUES (?, ?)', [name, parent_id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: results.insertId, name, parent_id });
  });
};

const deleteFolder = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM folders WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id });
  });
};

const moveFile = (req, res) => {
  const { id } = req.params;
  const { parent_id } = req.body;
  db.query('UPDATE files SET parent_id = ? WHERE id = ?', [parent_id, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id, parent_id });
  });
};

const moveFolder = (req, res) => {
  const { id } = req.params;
  const { parent_id } = req.body;
  db.query('UPDATE folders SET parent_id = ? WHERE id = ?', [parent_id, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id, parent_id });
  });
};

const renameFile = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query('UPDATE files SET name = ? WHERE id = ?', [name, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id, name });
  });
};

const renameFolder = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query('UPDATE folders SET name = ? WHERE id = ?', [name, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id, name });
  });
};

module.exports = { getAllFiles, createFile, updateFile, deleteFile, getFileById, getAllFolders, createFolder, deleteFolder, moveFile, moveFolder, renameFile, renameFolder };