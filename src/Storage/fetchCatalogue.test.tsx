import { Box } from "cogi-collectibles";
import fetchCatalogue from "./fetchCatalogue";

describe('fetchCatalogue()', () => {
    
    it('should return an array of boxes', async () => {

        const promise = fetchCatalogue()

        const boxes = await promise;
        
        expect(boxes.length).to.be.greaterThan(0);
    });

    it('should return an array containing same ids with multiple calls', async () => {

        const firstCall = await fetchCatalogue();
        const secondCall = await fetchCatalogue();

        expect(firstCall.length).to.be.greaterThan(0);
        expect(secondCall.length).to.be.greaterThan(0);

        expect(firstCall.length).to.be.equal(secondCall.length);

        for (let i = 0; i < firstCall.length; i++) {

            const t = firstCall[i];

            expect(!!secondCall.find((b:Box) => b.id === t.id)).to.be.equal(true);
        }
    });
});