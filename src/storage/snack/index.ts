import client from '../client';
import SnackModel from '~/common/model/snack.model';

async function createSnack(snack: SnackModel) {
  try {
    const snacks = await client.get<SnackModel[]>('snacks');

    const newSnacks = snacks?.length ? [...snacks, snack] : [snack];

    await client.store<SnackModel[]>('snacks', newSnacks);
  } catch (error) { }
}

async function getSnacks(): Promise<SnackModel[]> {
  try {
    const snacks = await client.get<SnackModel[]>('snacks');
    snacks?.sort((a, b) => (a.date > b.date ? 1 : -1))

    return snacks || [];
  } catch (error) {
    return [];
  }
}

async function deleteSnack(snack: SnackModel) {
  try {
    const snacks = await client.get<SnackModel[]>('snacks');
    if (!snacks || !snacks.length) return;

    const newSnacks = snacks.filter((item) => item.id != snack.id);
    await client.store<SnackModel[]>('snacks', newSnacks);
  } catch (error) { }
}

async function updateSnackById(snack: SnackModel) {
  try {
    const snacks = await client.get<SnackModel[]>('snacks');
    if (!snacks || !snacks.length) return;

    const newSnacks = snacks.map((item) =>
      item.id === snack.id ? snack : { ...item, id: item.id }
    );
    await client.store<SnackModel[]>('snacks', newSnacks);
  } catch (error) { }
}

async function getSnackById(id: string) {
  try {
    if (!id) return;

    const snacks = await client.get<SnackModel[]>('snacks');
    if (!snacks || !snacks.length) return;

    const snack = snacks.find((item) => item.id === id);
    return snack;
  } catch (error) {
    return;
  }
}

export { createSnack, getSnacks, deleteSnack, updateSnackById, getSnackById };
