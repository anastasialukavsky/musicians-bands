const { db } = require('./db');
const { Band, Musician, Song } = require('./index');

describe('Band, Musician, and Song Models', () => {

  beforeAll(async () => {
 
    await db.sync({ force: true });
  });

  test('can create a Band', async () => {
    const band = await Band.create({
      name: 'The Beatles',
      genre: 'Rock',
    });

    expect(band.name).toBe('The Beatles');
    expect(band.genre).toBe('Rock');
  });

  test('can create a Musician', async () => {
    const musician = await Musician.create({
      name: 'John Lennon',
      instrument: 'Guitar',
    });

    expect(musician.name).toBe('John Lennon');
    expect(musician.instrument).toBe('Guitar');
  });

  test('can create a Song', async () => {
    const song = await Song.create({
      title: 'Hey Jude',
      year: 1968,
      length: 7,
    });

    expect(song.title).toBe('Hey Jude');
    expect(song.year).toBe(1968);
    expect(song.length).toBe(7);
  });

  test('can update a Band', async () => {
    const updatedBand = await Band.findByPk(1);
    updatedBand.name = 'The Rolling Stones';
    await updatedBand.save();

    const band = await Band.findByPk(1);

    expect(band.name).toBe('The Rolling Stones');
  });

  test('can update a Musician', async () => {
    const updatedMusician = await Musician.findByPk(1);
    updatedMusician.instrument = 'Drums';
    await updatedMusician.save();

    const musician = await Musician.findByPk(1);

    expect(musician.instrument).toBe('Drums');
  });

  test('can delete a Band', async () => {
    const deletedBand = await Band.findByPk(1);
    await deletedBand.destroy();

    const band = await Band.findByPk(1);
    expect(band).toBeNull();
  });

  test('can delete a Musician', async () => {
    const deletedMusician = await Musician.findByPk(1);
    await deletedMusician.destroy();

    const musician = await Musician.findByPk(1);
    expect(musician).toBeNull();
  });
});
