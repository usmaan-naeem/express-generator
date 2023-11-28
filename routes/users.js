import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Get single user based on User ID
 */

 router.get('/:id', function(req, res, next) {
    res.send(`respond with a resource ${req.params.id}`);
 })

export default router;
