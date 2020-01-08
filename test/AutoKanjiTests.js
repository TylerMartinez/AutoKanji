const assert = require('assert')
const autoKanji = require('../index.js')

it('Simple Find: がっこう to 学校 ', () => {
  assert.equal(autoKanji.find("がっこう")[0], "学校");
})

it('Complex Find: じどうはんばいき to 自動販売機 ', () => {
  assert.equal(autoKanji.find("じどうはんばいき")[0], "自動販売機");
})

it('Multiple Values Find: あつい', () => {
  assert.equal(autoKanji.find("あつい").length, 5);
})

it('Increase Lenience: あつい', () => {
  autoKanji.setLenience(3);
  assert.equal(autoKanji.find("あつい").length, 6);
})

it('Decrease Lenience: あつい', () => {
  autoKanji.setLenience(1);
  assert.equal(autoKanji.find("あつい").length, 3);
})