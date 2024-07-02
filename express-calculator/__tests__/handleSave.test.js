const handleSave = require('../src/utils/handleSave');
const writeResultsToFile = require('../src/utils/writeResultsToFile');
jest.mock('../src/utils/writeResultsToFile');

describe('handleSave', () => {
    let req, res, next;

    beforeEach(() => {
        req = { query: {}, result: 'test result' };
        res = {};
        next = jest.fn();
        writeResultsToFile.mockClear();
    });

    test('calls writeResultsToFile when save is true', async () => {
        req.query.save = 'true';
        await handleSave(req, res, next);
        expect(writeResultsToFile).toHaveBeenCalledWith('test result');
        expect(next).toHaveBeenCalledWith();
    });

    test('does not call writeResultsToFile when save is not true', async () => {
        req.query.save = 'false';
        await handleSave(req, res, next);
        expect(writeResultsToFile).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith();
    });

    test('calls next with an error when writeResultsToFile throws an error', async () => {
        req.query.save = 'true';
        const testError = new Error('Test error');
        writeResultsToFile.mockRejectedValue(testError);
        await handleSave(req, res, next);
        expect(next).toHaveBeenCalledWith(testError);
    });

    test('calls next without an error when save is true and writeResultsToFile succeeds', async () => {
        req.query.save = 'true';
        writeResultsToFile.mockResolvedValue();
        await handleSave(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });

    test('calls next without an error when save is not true', async () => {
        req.query.save = 'false';
        await handleSave(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
});