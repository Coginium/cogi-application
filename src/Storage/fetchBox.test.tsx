import fetchBox from "./fetchBox()";
import fetchCatalogue from "./fetchCatalogue";

describe('fetchBox()', () => {

    it('should fetch a box with known id', async () => {

        const catalogue = await fetchCatalogue();
        const textBox = catalogue[0];
        const box = await fetchBox(textBox.id);

        expect(!!box).to.be.equal(true);
        expect(box.name).to.equal(textBox.name);
    });

    it('should reject when the id is wrong', (done) => {

        fetchBox('broken').then(() => undefined, () => done());
    });
});