const axios = require('axios');

module.exports = {
    // get all characters
    getAll :  async(req, res) => {
        try {
            let dataPage;
            let characters = [];
            let page = 2;
            if(page === 2) {
                dataPage = await axios.get(`https://rickandmortyapi.com/api/character`);
                characters = [...dataPage.data.results];
            }

            // traigo 200 personajes
            while (dataPage.data.info.next) {
                dataPage =  await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
                characters = [...characters, ...dataPage.data.results];
                page++;
            }
        
            console.log(characters.length)

            res.status(200).json({
                status: true,
                message: 'Success get all character',
                count: characters.length,
                body: characters
            });

        } catch (e) {
            res.status(500).json({
                status: false,
                message: "Server Error",
                body: ['Error']
            });
        }
    },
    // get character by id
    getId : async (req, res) => {
        try {
            const id = req.params.id;
            const personaje = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

            res.status(200).json({
                status: true,
                message: 'Success get character',
                id: id,
                body: personaje.data
            });

        } catch (e) {
            res.status(500).json({
                status: false,
                message: "Server Error",
                body: ['Error']
            });
        }
    },
    // get all location
    getLocation :async (req, res) => {
        try{
            let dataPage;
            let locations = [];
            let page = 2;
            if(page === 2) {
                dataPage = await axios.get(`https://rickandmortyapi.com/api/location`);
                locations = [...dataPage.data.results];
            }

            while (dataPage.data.info.next  ) {
                dataPage =  await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
                locations = [...locations, ...dataPage.data.results];
                page++;
            }

            locations = locations.map(x => ({
                name: x.name,
                id: x.id,
                type: x.type,
            }))

            console.log(locations.length)

            res.status(200).json({
                status: true,
                message: 'Success get character',
                count: locations.length,
                body: locations
            });

        } catch (e){
            res.status(500).json({
                status: false,
                message: "Server Error",
                body: ['Error']
            });
        }
    },
    // get all espisodes
    getEpisodes : async (req, res) => {
        try{
            let dataPage;
            let episodes = [];
            let page = 2;
            if(page === 2) {
                dataPage = await axios.get(`https://rickandmortyapi.com/api/episode`);
                episodes = [...dataPage.data.results];
            }

            while (dataPage.data.info.next  ) {
                dataPage =  await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
                episodes = [...episodes, ...dataPage.data.results];
                page++;
            }

            episodes = episodes.map(x => ({
                id: x.id,
                name: x.name,
                episode: x.episode,
            }))

            console.log(episodes.length)

            res.status(200).json({
                status: true,
                message: 'Success get episodes',
                count: episodes.length,
                body: episodes
            });

        } catch (e){
            res.status(500).json({
                status: false,
                message: "Server Error",
                body: ['Error']
            });
        }
    }
}