import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(providers);
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);
    if (user.provider) {
      return res.status(401).json({ message: 'User is provider!' });
    }
    user.provider = true;
    const { id, name, provider } = await user.save();
    return res.json({ id, name, provider });
  }
}

export default new ProviderController();
