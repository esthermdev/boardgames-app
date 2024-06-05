const express = require('express');
const admin = require('firebase-admin');

const boardgameRouter = express.Router();
const db = admin.firestore();

// Fetch all boardgames
boardgameRouter.route('/')
.get(async (req, res, next) => {
	try {
		const boardgamesRef = await db.collection('boardgames').get();
		const boardgames = boardgamesRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		const boardgamesSorted = boardgames.sort((a, b) => a.id - b.id);
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(boardgamesSorted);
	} catch (error) {
		next(error);
	}
})
.post(async (req, res, next) => {
	try {
		const newBoardgame = req.body;
		const addedNewBoardgame = await db.collection('boardgames').add(newBoardgame);
		res.status(201).json({ id: addedNewBoardgame.id, ...newBoardgame });
	} catch (error) {
		next(error);
	}
})
.put((req, res) => {
	res.status(403).end('PUT operation not supported on /boardgames');
})
.delete((req, res) => {
	res.status(403).end('DELETE operation not supported on /boardgames');
});

boardgameRouter.route('/:boardgameId')
.get(async (req, res, next) => {
	try {
		const boardgameId = req.params.boardgameId;
		const boardgameDoc = await db.collection('boardgames').doc(boardgameId).get();
		if (!boardgameDoc.exists) {
			return res.status(404).send('Boardgame not found');
		}
		res.status(200).json({ id: boardgameDoc.id, ...boardgameDoc.data() });
	} catch (error) {
		next(error);
	}
})
.post((req, res) => {
	res.status(403).end(`POST operation not supported on /boardgames/${req.params.boardgameId}`);
})
.put(async (req, res, next) => {
	try {
		const boardgameId = req.params.boardgameId;
		const updatedBoardgame = req.body;
		const response = await db.collection('boardgames').doc(boardgameId).update(updatedBoardgame);
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
})
.delete(async (req, res, next) => {
	try {
		const boardgameId = req.params.boardgameId;
		const response = await db.collection('boardgames').doc(boardgameId).delete();
		res.status(200).json(response);
	} catch (error) {
		next(error)
	}
});

module.exports = boardgameRouter;