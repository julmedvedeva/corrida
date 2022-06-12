// массивы ['имя', 'фимилия'] => ['имяФамилия']
// если повторяется, то у второго  ['nameLastname1']
// порядок сохраняется

function solution(names) {
  const initialAll = names.map((name) => {
    const res = name.reduce((perv, last) => {
      const a = perv.toLowerCase();
      const b = last[0].toUpperCase() + last.slice(1);
      const c = `${a}${b}`;
      return c;
    });
    return res;
  });

  const finish = [...initialAll].sort().reduce((prev, second) => {
    let unic = [];
    let refre = [];

    if (prev !== second) {
      unic = [prev, second].flat();
      refre = [];
    }
    refre = [...unic, `${second}1`].flat();
    return [...new Set(refre)];
  });
  return finish;
}

console.log(
  solution([
    ["name", "Lastname"],
    ["Ira", "Mashina"],
    ["name", "Lastname"]
  ])
);
