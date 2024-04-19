/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookTable from './BookTable';

test('Megfelelően megjelennek-e a könyvek', () => {
  const books = [{ id: 1, title: 'Könyv címe', name: 'Író neve' }];
  const { getByText } = render(<BookTable books={books} />);

  const titleElement = getByText('Könyv címe');
  const nameElement = getByText('Író neve');

  expect(titleElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
});

test('Megfelelően megjelenik-e a táblázat', () => {
  const books = [
    { id: 1, title: 'Könyv1', name: 'Író1' },
    { id: 2, title: 'Könyv2', name: 'Író2' },
    { id: 3, title: 'Könyv3', name: 'Író3' },
    { id: 4, title: 'Könyv4', name: 'Író4' },
  ];

  const { getByRole, getByText } = render(<BookTable books={books} />);

  const table = getByRole('table');
  expect(table).toBeInTheDocument();

  books.forEach(book => {
    const nameCell = getByText(book.name);
    const titleCell = getByText(book.title);
    expect(nameCell).toBeInTheDocument();
    expect(titleCell).toBeInTheDocument();
  });
});
