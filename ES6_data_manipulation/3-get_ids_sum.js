export default function getIdsSum(data) {
  return data.reduce((acc, curr) => acc + curr.id, 0);
}
