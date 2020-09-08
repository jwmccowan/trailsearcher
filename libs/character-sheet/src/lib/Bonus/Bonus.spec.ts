import { getBonus, Bonus, BonusType } from './Bonus';

describe('bonus', () => {
  describe('getBonus', () => {
    it('should return 0 if empty', () => {
      expect(getBonus([])).toBe(0);
    });

    it('should return a the bonus value if just one bonus', () => {
      const bonuses: Bonus[] = [{ type: BonusType.item, value: 2 }];
      expect(getBonus(bonuses)).toBe(2);
    });

    it('should not stack item bonuses', () => {
      const bonuses: Bonus[] = [
        { type: BonusType.item, value: 2 },
        { type: BonusType.item, value: 1 },
      ];
      expect(getBonus(bonuses)).toBe(2);
    });

    it('should not stack item bonuses but should stack one item and one status bonus', () => {
      const bonuses: Bonus[] = [
        { type: BonusType.item, value: 2 },
        { type: BonusType.item, value: 1 },
        { type: BonusType.status, value: 1 },
      ];
      expect(getBonus(bonuses)).toBe(3);
    });

    it('should stack untyped bonuses', () => {
      const bonuses: Bonus[] = [
        { type: BonusType.untyped, value: 2 },
        { type: BonusType.untyped, value: 1 },
      ];
      expect(getBonus(bonuses)).toBe(3);
    });

    it('should stack untyped bonuses and the max of any other bonuses', () => {
      const bonuses: Bonus[] = [
        { type: BonusType.untyped, value: 2 },
        { type: BonusType.untyped, value: 1 },
        { type: BonusType.item, value: 2 },
        { type: BonusType.item, value: 1 },
        { type: BonusType.status, value: 1 },
      ];
      expect(getBonus(bonuses)).toBe(6);
    });
  });
});
