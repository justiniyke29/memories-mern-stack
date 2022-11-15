import express  from 'express';
import {  getPosts, getPost, getPostsBySearch, createPost, updatePost, deletePost, likePost, commentPost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.patch('/:id', auth, updatePost);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);


export default router;