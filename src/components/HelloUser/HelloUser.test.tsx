import React from "react";
import {render, RenderResult} from '@testing-library/react';
import HelloUser from "./HelloUser";

describe('HelloUser', () => {
  it('should display the component', function () {
    const ariaLabel = 'greeting';
    const renderResult: RenderResult = render(<HelloUser name={'irrelevant name user'}/>);

    // Verifico que se renderiza el componente
    expect(renderResult.queryByLabelText(ariaLabel)).toBeTruthy();
  });

  it('should display a greetings with a name', function () {
    const nameUser = 'Ruben';
    const renderResult: RenderResult = render(<HelloUser name={nameUser}/>);

    // Verifico que se imprime con el nombre que le he dicho
    expect(renderResult.getByText(/Ruben/i)).toBeInTheDocument();
  });
});
