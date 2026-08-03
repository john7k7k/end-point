// Minimum-cost bipartite assignment (Kuhn-Munkres / Hungarian algorithm).
// The routine accepts a rectangular cost matrix and returns only real row/col
// assignments; callers are responsible for applying an application gate.
export const hungarian = (costMatrix) => {
  const rows = costMatrix.length;
  const cols = Math.max(0, ...costMatrix.map((row) => row.length));
  if (!rows || !cols) return [];
  const size = Math.max(rows, cols);
  const finite = costMatrix.flat().filter(Number.isFinite);
  const dummyCost = (finite.length ? Math.max(...finite) : 1) + 1;
  const costs = Array.from({ length: size + 1 }, (_, i) => Array.from({ length: size + 1 }, (_, j) => {
    if (!i || !j) return 0;
    return i <= rows && j <= cols && Number.isFinite(costMatrix[i - 1][j - 1]) ? costMatrix[i - 1][j - 1] : dummyCost;
  }));
  const potentialRows = Array(size + 1).fill(0), potentialCols = Array(size + 1).fill(0), matching = Array(size + 1).fill(0), parent = Array(size + 1).fill(0);
  for (let row = 1; row <= size; row += 1) {
    matching[0] = row;
    let column0 = 0;
    const minValue = Array(size + 1).fill(Infinity), used = Array(size + 1).fill(false);
    do {
      used[column0] = true;
      const row0 = matching[column0];
      let delta = Infinity, column1 = 0;
      for (let column = 1; column <= size; column += 1) {
        if (used[column]) continue;
        const current = costs[row0][column] - potentialRows[row0] - potentialCols[column];
        if (current < minValue[column]) { minValue[column] = current; parent[column] = column0; }
        if (minValue[column] < delta) { delta = minValue[column]; column1 = column; }
      }
      for (let column = 0; column <= size; column += 1) {
        if (used[column]) { potentialRows[matching[column]] += delta; potentialCols[column] -= delta; }
        else minValue[column] -= delta;
      }
      column0 = column1;
    } while (matching[column0] !== 0);
    do {
      const column1 = parent[column0];
      matching[column0] = matching[column1];
      column0 = column1;
    } while (column0 !== 0);
  }
  return Array.from({ length: cols }, (_, column) => ({ row: matching[column + 1] - 1, column }))
    .filter(({ row }) => row >= 0 && row < rows)
    .map(({ row, column }) => ({ row, column, cost: costMatrix[row][column] }));
};

const distance3 = (left, right) => Math.hypot(left.x - right.x, left.y - right.y, left.z - right.z);

export const associateByPosition = (observations, candidates, { gateMeters = .8 } = {}) => {
  const costs = observations.map((observation) => candidates.map((candidate) => distance3(observation.position, candidate.position || candidate)));
  return hungarian(costs)
    .filter((match) => match.cost <= gateMeters)
    .map((match) => ({ observation: observations[match.row], candidate: candidates[match.column], distanceMeters: Number(match.cost.toFixed(3)), algorithm: "hungarian" }));
};
