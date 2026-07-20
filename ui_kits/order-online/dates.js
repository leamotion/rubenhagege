window.nextWeekdays = function nextWeekdays() {
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const out = [];
  const d = new Date();
  d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7));
  for (let i = 0; i < 5; i++) {
    const cur = new Date(d);
    cur.setDate(d.getDate() + i);
    const key = `${cur.getFullYear()}-${cur.getMonth()}-${cur.getDate()}`;
    const hours = { 1: '9h – 13h', 2: '9h – 13h', 3: '9h – 13h', 4: '9h – 16h', 5: '9h – 17h' }[cur.getDay()];
    out.push({ label: `${dayNames[cur.getDay()]} ${cur.getDate()}`, isFriday: cur.getDay() === 5, key, hours });
  }
  return out;
};
