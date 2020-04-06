import getAuthentication from "../../src/getAuthentication"

const auth = getAuthentication([{
    username: "jim@example.com",
    password: "j1m"
}])


jest.mock("@/formatUser", () => jest.fn().mockImplementation(user => ({
    username: user.username
})))

describe("authentication", () => {
    describe("login", () => {
        it("returns the logged-in user object upon success", () => {
            expect(auth.login("jim@example.com", "j1m")).toEqual({
                username: "jim@example.com"
            })
        })

        it("returns null upon failure", () => {
            expect(auth.login("nobody@example.com", "nobody")).toBeNull()
        })
    })
})