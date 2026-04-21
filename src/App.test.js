import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title, planets, and alien button', async () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /is there love in the milky way/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /ask aliens/i })
  ).toBeInTheDocument();

  expect(await screen.findByText('Mercury')).toBeInTheDocument();
  expect(screen.getByText('Earth')).toBeInTheDocument();
});
