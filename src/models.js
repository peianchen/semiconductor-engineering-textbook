(function (root) {
  'use strict';
  const nonnegative = values => values.every(v => Number.isFinite(v) && v >= 0);
  root.BookModels = Object.freeze({
    powerMilliwatts(alpha, capacitancePF, voltageV, frequencyMHz) {
      if (!nonnegative([alpha, capacitancePF, voltageV, frequencyMHz]) || alpha > 1) return null;
      const result = alpha * capacitancePF * voltageV ** 2 * frequencyMHz / 1000;
      return Number.isFinite(result) ? result : null;
    },
    poissonYield(areaCM2, densityPerCM2) {
      if (!nonnegative([areaCM2, densityPerCM2])) return null;
      return Math.exp(-areaCM2 * densityPerCM2);
    }
  });
})(globalThis);
