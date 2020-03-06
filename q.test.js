QUnit.module('MAIN MODULE', {})
QUnit.test('TEST tip', assert => {
  assert.equal(tip(2, .2), 10, 'Correct Positive Inputs')
  assert.equal(tip(-2, -2),0,'Negative inputs')
  assert.equal(tip(-2, .2), 0, 'Negative Cost but correct percent')
  assert.equal(tip(2, -2), 0, 'Correct Cost but negative percent')
})