const Token = artifacts.require('./Token')

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('Token', (accounts) => {
	const name = "My Token"
	const symbol = "TKN"
	const decimals = '18'
	const totalSupply = '1000000000000000000000000'
	let token

	beforeEach(async () => {
		// Fetches the token from the Blockchain
		token = await Token.new()
	})

	describe('deployment', () => {
		it('tracks the name', async () => {
			// Read token name here
			const result = await token.name()
			// Check the token name is My Name
			result.should.equal(name)
		})

		it('tracks the symbol', async() => {
			const result = await token.symbol()
			result.should.equal(symbol)
		})

		it('tracks the decimals', async() => {
			const result = await token.decimals()
			result.toString().should.equal(decimals)
		})

		it('tracks the total supply', async() => {
			const result = await token.totalSupply()
			result.toString().should.equal(totalSupply)
		})
	})
})