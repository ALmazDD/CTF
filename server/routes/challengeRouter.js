const Router = require('express');
const router = Router();
const challengeController = require('../controllers/challengeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), challengeController.create);
router.get('/', challengeController.getAll);
router.get('/:id', challengeController.getOne);

module.exports = router;
