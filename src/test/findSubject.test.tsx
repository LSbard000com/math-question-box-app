import { findSubject } from "../components/post/PostSubmit";

describe('findSubject関数', () => {
    test('OK', () => {
        expect(findSubject('u101')).toBe('数論')
    })

    test('OK', () => {
        expect(findSubject('O00')).toBe('その他')
    })
})