'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Arithmetic Module', () => {

  describe('add()', () => {

    it('disallows strings', () => {
      expect(arithmetic.add('foo', 4)).toBeNull();
    });

    it('disallows arrays', () => {
      expect(arithmetic.add([], 4)).toBeNull();
    });

    it('disallows objects', () => {
      expect(arithmetic.add({}, 4)).toBeNull();
    });

    it('requires 2 args', () => {
      expect(arithmetic.add(4)).toBeNull();
    });

    it('can add', () => {
      let a = 1;
      let b = 2;
      expect(arithmetic.add(a,b)).toEqual(a+b);
    });

  });

  describe('subtract()', () => {

    it('disallows strings', () => {
      expect(arithmetic.subtract('foo', 4)).toBeNull();
    });

    it('disallows arrays', () => {
      expect(arithmetic.subtract([], 4)).toBeNull();
    });

    it('disallows objects', () => {
      expect(arithmetic.subtract({}, 4)).toBeNull();
    });

    it('requires 2 args', () => {
      expect(arithmetic.subtract(4)).toBeNull();
    });

    it('can subtract', () => {
      expect(arithmetic.subtract(3,1)).toEqual(2);
      expect(arithmetic.subtract(1,4)).toEqual(-3);
      expect(arithmetic.subtract(-3,-3)).toEqual(0);
    });

  });

});
