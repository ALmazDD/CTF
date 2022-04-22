const Router = require('express');
const router = Router();
const difficultyController = require('../controllers/difficultyController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), difficultyController.create);
router.get('/', difficultyController.getAll);
module.exports = router;
