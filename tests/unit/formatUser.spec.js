import formatUser from "../../src/formatUser"

describe("formatUser", () => {
    it("formats an user object correctly", () => {
        expect(formatUser({
            username: 'jim@example.com',
            name: "Jimbo Kern"
        })).toEqual({
            username: "jim@example.com",
            displayName: "Jimbo Kern"
        })
    })

    it("builds a display name from first and last name if relevant", () => {
        expect(formatUser({
            username: "jim@example.com",
            firstName: "Jimbo",
            lastName: "Kern"
        })).toEqual({
            username: "jim@example.com",
            displayName: "Jimbo Kern"
        })
    })

    it("uses username for a display name as a last resort", () => {
        expect(formatUser({
            username: "jim@example.com"
        })).toEqual({
            username: "jim@example.com",
            displayName: "jim@example.com"
        })
    })
})