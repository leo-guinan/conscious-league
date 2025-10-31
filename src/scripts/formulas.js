// Formula implementations for The Conscious League calculators

/**
 * Calculate Time Violence Score
 * TV(S) = Ops(S) × (1 + Info(S))
 */
export function calculateTimeViolence(ops, info) {
  return ops * (1 + info);
}

/**
 * Calculate Relative Time Severity
 * TSS = log₁₀(TV(S) / TV*(S))
 */
export function calculateTSS(actualTV, optimalTV) {
  if (optimalTV <= 0 || actualTV <= 0) return null;
  return Math.log10(actualTV / optimalTV);
}

/**
 * Get TSS Tier
 */
export function getTSSTier(tss) {
  if (tss === null || isNaN(tss)) return { tier: 'Invalid', color: '#999' };
  if (tss <= 0.3) return { tier: 'Baseline', color: '#10b981', overhead: '≤ 2×' };
  if (tss <= 0.7) return { tier: 'Moderate', color: '#f59e0b', overhead: '≈ 5×' };
  if (tss <= 1.0) return { tier: 'Major', color: '#ef4444', overhead: '≈ 10×' };
  if (tss <= 1.4) return { tier: 'Severe', color: '#dc2626', overhead: '≈ 25×' };
  return { tier: 'Crisis', color: '#991b1b', overhead: '≥ 100×' };
}

/**
 * Calculate Consciousness Index
 * C(S) = 1 - TV^H(S) / TV(S)
 */
export function calculateConsciousnessIndex(humanTV, totalTV) {
  if (totalTV <= 0) return null;
  const c = 1 - (humanTV / totalTV);
  return Math.max(0, Math.min(1, c)); // Clamp between 0 and 1
}

/**
 * Get Consciousness Level
 */
export function getConsciousnessLevel(c) {
  if (c === null || isNaN(c)) return { level: 'Invalid', color: '#999', description: '' };
  if (c >= 0.7) return { level: 'Conscious', color: '#10b981', description: 'Human time protected, friction absorbed' };
  if (c >= 0.3) return { level: 'Transitional', color: '#f59e0b', description: 'Mixed human/system friction' };
  return { level: 'Unconscious', color: '#ef4444', description: 'Human time is primary fuel' };
}

/**
 * Calculate Time Justice Triad
 * J = (SSR × NWI) / TVS
 */
export function calculateTimeJusticeTriad(ssr, nwi, tvs) {
  if (tvs <= 0) return null;
  return (ssr * nwi) / tvs;
}

/**
 * Get Justice Interpretation
 */
export function getJusticeInterpretation(j) {
  if (j === null || isNaN(j)) return { interpretation: 'Invalid', color: '#999', description: '' };
  if (j > 1) return { interpretation: 'Time Compounding', color: '#10b981', description: 'Time is compounding; system liberating awareness' };
  if (j >= 0.9 && j <= 1.1) return { interpretation: 'Steady State', color: '#f59e0b', description: 'Neutral system' };
  return { interpretation: 'Regression', color: '#ef4444', description: 'System consuming more time than it returns' };
}

/**
 * Calculate Hybrid Time Violence Transfer Efficiency
 * η^HA = ΔTV^H(S) / ΔTV^A(S)
 */
export function calculateTransferEfficiency(deltaHumanTV, deltaAITV) {
  if (deltaAITV === 0) return null;
  return deltaHumanTV / deltaAITV;
}

/**
 * Format number for display
 */
export function formatNumber(num, decimals = 2) {
  if (num === null || isNaN(num)) return '—';
  return num.toFixed(decimals);
}

