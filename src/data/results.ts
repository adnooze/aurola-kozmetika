export interface Result {
  image: string;
  label: string;
  quote?: string;
}

/** Rezultati koje su korisnice poslale (slike s Instagram profila). */
export const results: Result[] = [
  {
    image: 'instagram/rezultat-rast.jpg',
    label: '31.08. → 05.10.',
    quote: 'Očekivala sam da će biti neka promjena, ali ne ovako drastična.',
  },
  {
    image: 'instagram/rezultati-a-5.jpg',
    label: '6.11. → 18.1.',
    quote: 'Kosa je znatno narasla, dosta se oporavila, zdravija je i ljepša.',
  },
  {
    image: 'instagram/rezultati-a-4.jpg',
    label: '10.10. → 30.01.',
    quote: 'Evo mene poslije 3 i po mjeseca – ne znam ni sama gdje kose nije izbilo.',
  },
  {
    image: 'instagram/rezultati-b-6.jpg',
    label: '10.07. → 10.10.',
    quote: 'Samo da pokažem kako lijepu kosu sad imam.',
  },
  { image: 'instagram/rezultati-a-1.jpg', label: '22.05. → 02.06.' },
  { image: 'instagram/rezultat-sjaj.jpg', label: 'Prije i poslije mjesec i po' },
  { image: 'instagram/rezultati-a-2.jpg', label: '30.05. → 20.07.' },
  {
    image: 'instagram/rezultati-a-3.jpg',
    label: 'Gušća kosa',
    quote: 'I frizerka mi je rekla da mi je kosa toliko progušćala.',
  },
  { image: 'instagram/rezultati-a-6.jpg', label: '10.05. → 17.06.' },
  { image: 'instagram/rezultati-a-7.jpg', label: '28.01. → 05.03.' },
  { image: 'instagram/rezultati-b-1.jpg', label: 'Maj → Avgust' },
  {
    image: 'instagram/rezultati-b-3.jpg',
    label: '20.04. → 08.08.',
    quote: 'Prirodne maske, ampule i šampon odradili su svoje.',
  },
  { image: 'instagram/rezultati-b-4.jpg', label: 'Poslije tri sedmice' },
  { image: 'instagram/rezultati-b-5.jpg', label: '6.11. → 18.1.' },
  { image: 'instagram/rezultati-b-2.jpg', label: '22.05. → 02.06.' },
];

export const reels = [
  { image: 'instagram/reel-1.jpg', title: 'Rižina voda za rast kose' },
  { image: 'instagram/reel-2.jpg', title: 'Njega dužine' },
  { image: 'instagram/reel-3.jpg', title: 'Hrana za dužu i gušću kosu' },
];
