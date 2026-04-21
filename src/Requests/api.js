export function getPlanets() {
  return Promise.resolve([
    { name: "Mercury", statue: "no" },
    { name: "Venus", statue: "maybe" },
    { name: "Earth", statue: "yes" },
    { name: "Mars", statue: "maybe" },
    { name: "Jupiter", statue: "no" },
  ]);
}

export function getAlienOpinions() {
  return Promise.resolve([
    "Mercury answers every message too fast.",
    "Venus is clearly flirting with the entire quadrant.",
    "Earth has potential but brings too much emotional weather.",
    "Mars is trying too hard.",
    "Jupiter mistakes size for personality.",
  ]);
}
