const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

const GITHUB_API_URL = 'https://api.github.com';

/**
 * @route   GET /api/usuario/:username
 * @desc    Busca o perfil de um usuário no GitHub.
 * @access  Público
 */
app.get('/api/usuario/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const resposta = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    res.status(200).json(resposta.data);

  } catch (error) {
    console.error('Erro ao buscar usuário:', error.message);

    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'Usuário não encontrado no GitHub.' });
    }
  }
});

/**
 * @route   GET /api/repos/:username
 * @desc    Busca os repositórios públicos de um usuário no GitHub.
 * @access  Público
 */
app.get('/api/repos/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const resposta = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);

    const repositoriosFiltrados = resposta.data.map(repo => ({
      nome: repo.name,
      descricao: repo.description,
      url: repo.html_url
    }));

    res.status(200).json(repositoriosFiltrados);

  } catch (error) {

    console.error('Erro ao buscar repositórios:', error.message);

    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'Usuário não encontrado, portanto não foi possível buscar os repositórios.' });
    }
    
    res.status(500).json({ message: 'Ocorreu um erro no servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});