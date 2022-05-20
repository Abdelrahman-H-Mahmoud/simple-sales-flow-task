import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {createGlobalStore} from "./redux/store";

describe("The first screen", () => {
  let container: HTMLElement, getByText: any;

  beforeEach(() => {
    ({container, getByText} = render(
      <Provider store={createGlobalStore()}>
        <App/>
      </Provider>
    ))
  });

  it("is rendered initially with a dark mode label", () => {
    const darkModeLabel = getByText(/dark mode/i);

    expect(darkModeLabel).toBeInTheDocument();
  })

  it("after a click on the dark mode switch, the dark mode class is set", () => {
    const darkModeLabel = getByText(/dark mode/i);

    expect(container.firstChild).not.toHaveClass("app--dark-mode");

    fireEvent.click(darkModeLabel);
    expect(container.firstChild).toHaveClass("app--dark-mode");
  })

  it("clicking the dark mode switch twice, removes the dark mode class again", () => {
    const darkModeLabel = getByText(/dark mode/i);

    fireEvent.click(darkModeLabel);
    expect(container.firstChild).toHaveClass("app--dark-mode");

    fireEvent.click(darkModeLabel);
    expect(container.firstChild).not.toHaveClass("app--dark-mode");
  })
})