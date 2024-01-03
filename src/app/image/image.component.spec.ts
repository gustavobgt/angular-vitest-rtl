import { render, screen, fireEvent } from '@testing-library/angular';
import { ImageComponent } from './image.component';
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

describe('Image', () => {
  test('should render image', async () => {
    const { container } = await render(ImageComponent);
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  });
});
