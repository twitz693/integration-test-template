import axios from "axios";


describe('Find Pokemon', () => {
    it('should find a pokemon', async () => {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');

        const body = result.data;

        expect(body.forms[0].name).toBe('ditto');
        expect(body.height).toBe(3);
        expect(body.id).toBe(132);

    });
})