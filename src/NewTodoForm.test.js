import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<NewTodoForm/>);
});
it("Matches the snapshot", function() {
    const {asFragment} = render(<NewTodoForm/>);
    expect(asFragment()).toMatchSnapshot();
})
it("creates new todo on form submit", function() {
    const createFakeTodo = jest.fn();
    const {getByText} = render(<NewTodoForm createTodo={createFakeTodo}/>);
    const createButton = getByText("Add new todo!");
    fireEvent.click(createButton);
    expect(createFakeTodo).toHaveBeenCalled();
})