const { Router } = require('express');
const pokemonsRoutes = require("./pokemonsRoutes");
const pokemonsByIdRoutes = require("./pokemonsByIdRoutes");
const pokemonsByNameRoutes = require("./pokemonsByNameRoutes");
const postPokemonsRoutes = require("./postPokemonsRoutes");
const typesRoutes = require ("./typesRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/pokemons", pokemonsByIdRoutes);
router.use("/pokemons", pokemonsByNameRoutes);
router.use("/pokemons", pokemonsRoutes);
router.use("/pokemons", postPokemonsRoutes);
router.use("/types", typesRoutes);

module.exports = router;
