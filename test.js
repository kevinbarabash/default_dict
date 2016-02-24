describe('default_dict', () => {
    let dd;

    describe('array defaults', () => {
        beforeEach(() => {
            dd = defaultDict(() => []);
        });

        it('should allow push', () => {
            dd.apples.push('granny smith');
            dd.apples.push('golden delicious');

            expect(dd.apples).toEqual(['granny smith', 'golden delicious']);
        });

        it('should allow length', () => {
            dd.dogs.push('corgie');
            dd.dogs.push('kiba');

            expect(dd.dogs.length).toBe(2);
            expect(dd.cats.length).toBe(0);
        });
    });

    describe('object defaults', () => {
        beforeEach(() => {
            dd = defaultDict(() => Object.create(null));
        });

        it('should allow getting/setting props', () => {
            dd.p1.x = 5;
            dd.p1.y = 10;

            expect(dd.p1.x).toBe(5);
            expect(dd.p1.y).toBe(10);

            expect(dd.p2.x).toBe(undefined);
            expect(dd.p2.y).toBe(undefined);
        });
    });

    describe('string defaults', () => {
        beforeEach(() => {
            dd = defaultDict(() => '');
        });

        it('should allow appending', () => {
            dd.token += 'a';
            dd.token += 'b';
            dd.token += 'c';

            expect(dd.token).toBe('abc');
        });
    });

    describe('2D array', () => {
        beforeEach(() => {
            dd = defaultDict(() => []);
        });

        it('should allow setting values', () => {
            dd[0][0] = 'a';
            dd[1][0] = 'b';
            dd[0][1] = 'c';
            dd[1][1] = 'd';
        });
    });
});
