export const expectedDataUsers = [
  {
    name: "Erik",
    group: 1,
  },
  {
    name: "Lisa",
    group: 2,
  },
  {
    name: "Hampus",
    group: 2,
  },
  {
    name: "Linda",
    group: 3,
  },
  {
    name: "Eva",
    group: 1,
  },
  {
    name: "Anna",
    group: 3,
  },
];

export const expectedDataGroups = [
  {
    id: 1,
    groupName: "Hajarna",
  },
  {
    id: 2,
    groupName: "Valarna",
  },
  {
    id: 3,
    groupName: "Zebrorna",
  },
];

export const getUsers = (): Promise<{ name: string; group: number }[]> =>
  new Promise((resolve) => resolve(expectedDataUsers));

export const getGroups = (): Promise<{ id: number; groupName: string }[]> =>
  new Promise((resolve) => resolve(expectedDataGroups));
