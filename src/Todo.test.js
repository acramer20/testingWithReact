import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders and does not crash", function(){
    render(<Todo/>);
});

it("matches the snapshot", function(){
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the delete function on button click", function() {
    const deleteMock = jest.fn();
    const {getByText} = render(<Todo remove={deleteMock}/>);
    const deleteButton = getByText("X");
    fireEvent.click(deleteButton);
    expect(deleteMock).toHaveBeenCalled();
});