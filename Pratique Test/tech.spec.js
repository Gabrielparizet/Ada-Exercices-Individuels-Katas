const {removeMatches} = require('./allumettes')



describe('Tests Allumettes', ()=> {
    it('removeMatches should remove matches from totalMatches', () => {
        // GIVEN
            const sampleRemoveMatches = 3
        // WHEN
            const resultOfRemovedMatches = removeMatches(sampleRemoveMatches)
        // THEN
            expect(resultOfRemovedMatches).toEqual(47)
    })
})