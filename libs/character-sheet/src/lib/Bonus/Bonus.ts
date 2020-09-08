export type Bonus = {
  type: BonusType;
  value: number;
};

export enum BonusType {
  circumstance = 'circumstance',
  item = 'item',
  status = 'status',
  untyped = 'untyped',
}

export const getBonusByType = (bonuses: Bonus[], bonusType: BonusType) => {
  const filtered = bonuses.filter(({ type }) => type === bonusType);
  if (bonusType === BonusType.untyped) {
    return filtered.reduce((total, { value }) => total + value, 0);
  } else {
    return filtered.reduce((max, { value }) => Math.max(max, value), 0);
  }
};

export type BonusesByType = Record<BonusType, number>;

export const organizeBonusesByType = (bonuses: Bonus[]): BonusesByType => {
  const bonusesByType: Partial<BonusesByType> = {};
  for (const bType in BonusType) {
    bonusesByType[bType] = getBonusByType(bonuses, BonusType[bType]);
  }
  return bonusesByType as BonusesByType;
};

export const getBonus = (bonuses: Bonus[]) => {
  const organizedBonuses = organizeBonusesByType(bonuses);
  let total = 0;
  for (const bType in organizedBonuses) {
    total += organizedBonuses[bType];
  }
  return total;
};
